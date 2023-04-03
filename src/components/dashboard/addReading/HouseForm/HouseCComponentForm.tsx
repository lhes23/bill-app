import React from "react"
import { setHouseCDataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { getHouseDetails } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseCComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseCData } = useAppSelector((state) => state.houses)

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
