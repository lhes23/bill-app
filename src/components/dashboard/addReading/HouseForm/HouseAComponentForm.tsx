import React from "react"
import { setHouseADataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { getHouseDetails } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseAComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseAData } = useAppSelector((state) => state.houses)

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
