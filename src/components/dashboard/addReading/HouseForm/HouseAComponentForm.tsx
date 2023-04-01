import React from "react"
import { setHouseADataReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { GetHouseId, GetTenantName } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"

const HouseAComponentForm = () => {
  const dispatch = useAppDispatch()
  const { houseAData } = useAppSelector((state) => state.houses)
  const house_id = GetHouseId(houseAData.name)
  const tenant = GetTenantName(house_id)

  const previousChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseADataReadings({
        ...houseAData,
        previous: Number(e.target.value)
      })
    )
  const presentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseADataReadings({
        ...houseAData,
        present: Number(e.target.value),
        house_id,
        tenant
      })
    )

  return (
    <>
      <HouseComponent
        house={houseAData}
        tenantName={tenant}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseAComponentForm
