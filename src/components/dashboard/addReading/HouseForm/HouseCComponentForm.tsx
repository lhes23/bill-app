import React from "react"
import {
  setHouseCDataReadings,
  setHouseMainDataReadings
} from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import {
  computeMainBill,
  computeMainConsumption,
  getHouseDetails
} from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseCComponentForm = () => {
  const dispatch = useAppDispatch()
  const {
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    totalReadings,
    houseMainData
  } = useAppSelector((state) => state.houses)

  const housesConsumptions =
    houseAData.consumption +
    houseBData.consumption +
    houseCData.consumption +
    houseDData.consumption

  // Main Consumption
  const consumption = computeMainConsumption(
    totalReadings.consumption,
    housesConsumptions
  )

  const housesMainBills =
    houseAData.bill + houseBData.bill + houseCData.bill + houseDData.bill

  // Main Bill
  const bill = computeMainBill(totalReadings.bill, housesMainBills)

  const houseCDetails = getHouseDetails(houseCData)

  const previousChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseCDataReadings({
        ...houseCDetails,
        previous: Number(e.target.value)
      })
    )

    await dispatch(
      setHouseMainDataReadings({
        ...houseMainData,
        consumption,
        bill
      })
    )
  }
  const presentChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseCDataReadings({
        ...houseCDetails,
        present: Number(e.target.value)
      })
    )

    await dispatch(
      setHouseMainDataReadings({
        ...houseMainData,
        consumption,
        bill
      })
    )
  }
  return (
    <>
      <HouseComponent
        house={houseCDetails}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseCComponentForm
