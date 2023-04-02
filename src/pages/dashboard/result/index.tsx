import React from "react"
import { useAppDispatch, useAppSelector } from "@/store"
import { FcElectricity } from "react-icons/fc"
import { IoWaterSharp } from "react-icons/io5"
import client from "@/axios/client"
import { useRouter } from "next/router"
import Link from "next/link"
import houses from "@/pages/api/houses"
import PageLayout from "@/components/dashboard/layouts/PageLayout"

const ResultTable = () => {
  const router = useRouter()
  const store = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const {
    pesoPer,
    totalReadings,
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    houseMainData
  } = store.houses
  const { dueDate, startDate, endDate, billType, bill } = totalReadings

  const housesData = [
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    houseMainData
  ]

  const confirmHandler = async () => {
    // client
    //   .post("yearly-bills/", {
    //     year: endDate.split(" ")[3],
    //     month: endDate.split(" ")[1],
    //     bill_type: billType,
    //     bill
    //   })
    //   .then((res) => {
    //     if (!res.status) {
    //       console.log("Something went wrong")
    //     }
    //   })
    //   .catch((err) => console.log(err))

    housesData.map((house) => {
      const item = {
        house_id: house._id,
        tenant_id: house.tenantDetails._id,
        billType,
        dueDate,
        startDate,
        endDate,
        previousReading: house.previous,
        presentReading: house.present,
        consumption: house.consumption,
        pesoPer,
        bill: house.bill
      }
      client
        .post("/api/readings/", item)
        .then((res) => {
          if (!res.status) {
            console.log("Something went wrong")
          }
        })
        .catch((err) => console.log(err))
    })

    router.push("/dashboard")

    console.log({ housesData })
  }

  return (
    <>
      <PageLayout title="Result">
        {housesData.map((house) => (
          <div
            key={house.name}
            className="max-w-md mx-auto my-4 rounded-xl shadow-lg overflow-hidden md:max-w-2xl"
          >
            <div data-theme="light">
              <div className="px-2 py-4">
                <div className="flex justify-center">
                  {billType === "Electric" ? (
                    <FcElectricity
                      color="white"
                      size={40}
                      className="bg-green-500 rounded-full"
                    />
                  ) : (
                    <IoWaterSharp
                      color="white"
                      size={40}
                      className="bg-blue-500 rounded-full"
                    />
                  )}
                </div>
                <div className="uppercase tracking-wide text-lg md:text-2xl font-semibold text-center">
                  {billType} Consumption Bill
                </div>
                <div className="uppercase tracking-wide text-md md:text-lg font-bold text-center">
                  {house.name}
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full px-2">
                      <div className="overflow-hidden">
                        <table className="table table-zebra w-full">
                          <tbody>
                            <tr className="">
                              <td>Due Date:</td>
                              <td className={`text-lg font-semibold`}>
                                {dueDate}
                              </td>
                            </tr>
                            <tr className="">
                              <td>Name of Tenant:</td>
                              <td className={styles.divValue}>
                                {house.tenantDetails?.name}
                              </td>
                            </tr>
                            <tr className="">
                              <td>Date From:</td>
                              <td className={styles.divValue}>{startDate}</td>
                            </tr>
                            <tr className="">
                              <td>Date To:</td>
                              <td className={styles.divValue}>{endDate}</td>
                            </tr>
                            <tr className="">
                              <td>Previous Reading:</td>
                              <td className={styles.divValue}>
                                {house.previous}
                              </td>
                            </tr>
                            <tr className="">
                              <td>Present Reading:</td>
                              <td className={styles.divValue}>
                                {house.present}
                              </td>
                            </tr>
                            <tr className="">
                              <td>Consumption:</td>
                              <td className={styles.divValue}>
                                {house.consumption}
                              </td>
                            </tr>
                            <tr className="">
                              <td>
                                Peso / {billType === "Electric" ? "kW" : "cm"}:
                              </td>
                              <td className={styles.divValue}>₱ {pesoPer}</td>
                            </tr>
                            <tr className="">
                              <td>Total Bill:</td>
                              <td
                                className={`${styles.divValue} font-bold text-2xl`}
                              >
                                ₱ {house.bill.toFixed(2)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mb-8 p-4">
          <button
            className="btn btn-outline btn-warning btn-wide mx-2"
            onClick={() => router.back()}
          >
            Go Back
          </button>
          <button
            onClick={confirmHandler}
            className="btn btn-primary btn-wide mx-2"
          >
            Confirm
          </button>
        </div>
      </PageLayout>
    </>
  )
}

const styles = {
  divValue: "text-md font-light p-2 whitespace-nowrap"
}

export default ResultTable
