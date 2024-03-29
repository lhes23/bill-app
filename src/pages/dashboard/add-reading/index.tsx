import getData from "@/axios/getData"
import HouseAComponentForm from "@/components/dashboard/addReading/HouseForm/HouseAComponentForm"
import HouseBComponentForm from "@/components/dashboard/addReading/HouseForm/HouseBComponentForm"
import HouseCComponentForm from "@/components/dashboard/addReading/HouseForm/HouseCComponentForm"
import HouseDComponentForm from "@/components/dashboard/addReading/HouseForm/HouseDComponentForm"
import {
  computeMainBill,
  computeMainConsumption,
  getBillsAndConsumptions
} from "@/components/dashboard/addReading/HouseForm/hooks/getDetails"
import TotalReadingForm from "@/components/dashboard/addReading/TotalReadingForm"
import PageLayout from "@/components/dashboard/layouts/PageLayout"
import {
  setAllHouses,
  setHouseADataReadings,
  setHouseBDataReadings,
  setHouseCDataReadings,
  setHouseDDataReadings,
  setHouseMainDataReadings,
  setPesoPer
} from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { useRouter } from "next/router"
import React, { FormEvent, useEffect } from "react"
import { setActiveTenants } from "@/redux/tenantSlice"
import { IHouse, ITenant } from "@/interfaces"

type IProps = {
  houses: IHouse[]
  activeTenants: ITenant[]
}

const AddReading = ({ houses, activeTenants }: IProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {
    totalReadings,
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    houseMainData
  } = useAppSelector((state) => state.houses)

  useEffect(() => {
    dispatch(setAllHouses(houses))
    dispatch(setActiveTenants(activeTenants))
  }, [])

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    if (
      !totalReadings.present ||
      !totalReadings.previous ||
      !totalReadings.bill
    )
      return console.log("Total Readings Present and Previous must not be null")

    const totalConsumption = +totalReadings.present - +totalReadings.previous
    const pesoper = Math.round(+totalReadings.bill / totalConsumption)
    // const pesoper = Math.ceil(+totalReadings.bill / totalConsumption)

    const houseAConsumption = getBillsAndConsumptions(
      houseAData.present ?? 0,
      houseAData.previous ?? 0,
      pesoper
    )

    const houseBConsumption = getBillsAndConsumptions(
      houseBData.present ?? 0,
      houseBData.previous ?? 0,
      pesoper
    )

    const houseCConsumption = getBillsAndConsumptions(
      houseCData.present ?? 0,
      houseCData.previous ?? 0,
      pesoper
    )
    const houseDConsumption = getBillsAndConsumptions(
      houseDData.present ?? 0,
      houseDData.previous ?? 0,
      pesoper
    )

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

    // Save pesoPer on Redux
    dispatch(setPesoPer(pesoper))

    if (
      !houseAConsumption ||
      !houseBConsumption ||
      !houseCConsumption ||
      !houseDConsumption
    ) {
      return console.log("No consumption found")
    }

    // Main House
    const housesConsumptions =
      houseAConsumption.consumption +
      houseBConsumption.consumption +
      houseCConsumption.consumption +
      houseDConsumption.consumption

    // Main Consumption
    const consumption = computeMainConsumption(
      totalReadings.consumption,
      housesConsumptions
    )

    const housesMainBills =
      houseAConsumption.bill +
      houseBConsumption.bill +
      houseCConsumption.bill +
      houseDConsumption.bill

    // Main Bill
    const bill = !totalReadings.bill
      ? ""
      : computeMainBill(totalReadings.bill, housesMainBills)

    await dispatch(
      setHouseMainDataReadings({
        ...houseMainData,
        consumption,
        bill
      })
    )

    router.push("/dashboard/result")
  }

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

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  const houses = await getData("/api/houses")
  const activeTenants = await getData("/api/tenants/active")
  return {
    props: {
      houses,
      activeTenants
    }
  }
}

export default AddReading
