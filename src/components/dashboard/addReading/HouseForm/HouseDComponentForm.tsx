import React from "react"
import { setHouseDDataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { getHouseDetails } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseDComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseDData } = useAppSelector((state) => state.houses)

  const houseDDetails = getHouseDetails(houseDData)

  const previousChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseDDataReadings({
        ...houseDDetails,
        previous: Number(e.target.value)
      })
    )
  }
  const presentChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseDDataReadings({
        ...houseDDetails,
        present: Number(e.target.value)
      })
    )
  }
  return (
    <>
      <HouseComponent
        house={houseDDetails}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseDComponentForm
