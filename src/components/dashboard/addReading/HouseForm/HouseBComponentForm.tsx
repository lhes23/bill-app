import React from "react"
import { setHouseBDataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { GetHouseId, GetTenantName } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseBComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseBData } = useAppSelector((state) => state.houses)
  const house_id = GetHouseId(houseBData.name)
  const tenant = GetTenantName(house_id)

  const previousChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseBDataReadings({
        ...houseBData,
        previous: Number(e.target.value)
      })
    )
  const presentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseBDataReadings({
        ...houseBData,
        present: Number(e.target.value),
        house_id,
        tenant
      })
    )

  return (
    <>
      <HouseComponent
        house={houseBData}
        tenantName={tenant}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseBComponentForm
