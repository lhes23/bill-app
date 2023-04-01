import React from "react"
import { setHouseCDataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { GetHouseId, GetTenantName } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseCComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseCData } = useAppSelector((state) => state.houses)
  const house_id = GetHouseId(houseCData.name)
  const tenant = GetTenantName(house_id)

  const previousChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseCDataReadings({
        ...houseCData,
        previous: Number(e.target.value)
      })
    )
  const presentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseCDataReadings({
        ...houseCData,
        present: Number(e.target.value),
        house_id,
        tenant
      })
    )

  return (
    <>
      <HouseComponent
        house={houseCData}
        tenantName={tenant}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseCComponentForm
