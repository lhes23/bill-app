import React from "react"
import {
  setHouseADataReadings,
  setHouseMainDataReadings
} from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { computeMainConsumption, getHouseDetails } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"
import { computeMainBill } from "@/components/dashboard/addReading/HouseForm/hooks/getDetails"

const HouseAComponentForm = () => {
  const dispatch = useAppDispatch()
  const {
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    totalReadings,
    houseMainData
  } = useAppSelector((state) => state.houses)

  // const housesConsumptions =
  //   houseAData.consumption +
  //   houseBData.consumption +
  //   houseCData.consumption +
  //   houseDData.consumption

  // // Main Consumption
  // const consumption = computeMainConsumption(
  //   totalReadings.consumption,
  //   housesConsumptions
  // )

  // const housesMainBills =
  //   houseAData.bill + houseBData.bill + houseCData.bill + houseDData.bill

  // // Main Bill
  // const bill = computeMainBill(totalReadings.bill, housesMainBills)

  const houseADetails = getHouseDetails(houseAData)

  const previousChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseADataReadings({
        ...houseADetails,
        previous: Number(e.target.value)
      })
    )

    // await dispatch(
    //   setHouseMainDataReadings({
    //     ...houseMainData,
    //     consumption,
    //     bill
    //   })
    // )
  }
  const presentChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseADataReadings({
        ...houseADetails,
        present: Number(e.target.value)
      })
    )

    // await dispatch(
    //   setHouseMainDataReadings({
    //     ...houseMainData,
    //     consumption,
    //     bill
    //   })
    // )
  }
  return (
    <>
      <HouseComponent
        house={houseADetails}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseAComponentForm
