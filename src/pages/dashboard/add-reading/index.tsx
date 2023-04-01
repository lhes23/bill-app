import HouseAComponentForm from "@/components/dashboard/addReading/HouseForm/HouseAComponentForm"
import HouseBComponentForm from "@/components/dashboard/addReading/HouseForm/HouseBComponentForm"
import HouseCComponentForm from "@/components/dashboard/addReading/HouseForm/HouseCComponentForm"
import HouseDComponentForm from "@/components/dashboard/addReading/HouseForm/HouseDComponentForm"
import { getBillsAndConsumptions } from "@/components/dashboard/addReading/HouseForm/hooks/getDetails"
import TotalReadingForm from "@/components/dashboard/addReading/TotalReadingForm"
import PageLayout from "@/components/dashboard/layouts/PageLayout"
import {
  getAllHouses,
  setHouseADataReadings,
  setHouseBDataReadings,
  setHouseCDataReadings,
  setHouseDDataReadings,
  setHouseMainDataReadings,
  setPesoPer
} from "@/redux/houseSlice"
import { getActiveTenants } from "@/redux/tenantSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { useRouter } from "next/router"
import React, { FormEvent, useEffect } from "react"

const AddReading = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { houses } = useAppSelector((state) => state)
  const {
    totalReadings,
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    houseMainData
  } = houses

  useEffect(() => {
    dispatch(getAllHouses())
    dispatch(getActiveTenants())
  }, [dispatch])

  const totalConsumption = totalReadings.present - totalReadings.previous
  const pesoper = Math.round(totalReadings.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    const houseAConsumption = getBillsAndConsumptions(
      houseAData.present,
      houseAData.previous,
      pesoper
    )
    const houseBConsumption = getBillsAndConsumptions(
      houseBData.present,
      houseBData.previous,
      pesoper
    )
    const houseCConsumption = getBillsAndConsumptions(
      houseCData.present,
      houseCData.previous,
      pesoper
    )
    const houseDConsumption = getBillsAndConsumptions(
      houseDData.present,
      houseDData.previous,
      pesoper
    )

    const houseMainConsumption =
      totalConsumption -
      (houseAData.consumption +
        houseBData.consumption +
        houseCData.consumption +
        houseDData.consumption)
    const houseMainBill =
      totalReadings.bill -
      (houseAData.bill + houseBData.bill + houseCData.bill + houseDData.bill)

    await dispatch(
      setHouseADataReadings({
        ...houseAData,
        ...houseAConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseBDataReadings({
        ...houseBData,
        ...houseBConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseCDataReadings({
        ...houseCData,
        ...houseCConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseDDataReadings({
        ...houseDData,
        ...houseDConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseMainDataReadings({
        ...houseMainData,
        present: totalReadings.present,
        previous: totalReadings.previous,
        consumption: houseMainConsumption,
        // bill: Number(houseMainBill).toFixed(2),
        bill: houseMainBill,
        pesoper
      })
    )

    // Save pesoPer on Redux
    dispatch(setPesoPer(pesoper))
    router.push("/dashboard/result")
  }

  console.log(useAppSelector((state) => state))

  return (
    <>
      <PageLayout title="Add a Reading">
        <div className="flex justify-center">
          <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md md:w-[50vw]">
            <TotalReadingForm />
            <HouseAComponentForm />
            <HouseBComponentForm />
            <HouseCComponentForm />
            <HouseDComponentForm />
            <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-wide"
                onClick={formHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default AddReading
