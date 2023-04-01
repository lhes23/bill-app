import React from "react"
import { setHouseDDataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { GetHouseId, GetTenantName } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseDComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseDData } = useAppSelector((state) => state.houses)
  const house_id = GetHouseId(houseDData.name)
  const tenant = GetTenantName(house_id)

  const previousChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseDDataReadings({
        ...houseDData,
        previous: Number(e.target.value)
      })
    )
  const presentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseDDataReadings({
        ...houseDData,
        present: Number(e.target.value),
        house_id,
        tenant
      })
    )

  return (
    <>
      <HouseComponent
        house={houseDData}
        tenantName={tenant}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseDComponentForm
