import React from "react"
import { setHouseBDataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { getHouseDetails } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseBComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseBData } = useAppSelector((state) => state.houses)

  const houseBDetails = getHouseDetails(houseBData)

  const previousChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseBDataReadings({
        ...houseBDetails,
        previous: Number(e.target.value)
      })
    )
  }
  const presentChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseBDataReadings({
        ...houseBDetails,
        present: Number(e.target.value)
      })
    )
  }
  return (
    <>
      <HouseComponent
        house={houseBDetails}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseBComponentForm
