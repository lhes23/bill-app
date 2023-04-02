import React from "react"
import {
  setHouseADataReadings,
  setHouseMainDataReadings
} from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import { GetHouseId, GetTenantName } from "./hooks/getDetails"
import HouseComponent from "./HouseComponent"
import {
  computeMainBill,
  computeMainConsumption
} from "@/components/dashboard/addReading/HouseForm/hooks/getDetails"

const HouseAComponentForm = () => {
  const dispatch = useAppDispatch()
  const {
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    houseMainData,
    totalReadings,
    allHouses
  } = useAppSelector((state) => state.houses)
  const house_id = GetHouseId(houseAData.name)
  const tenant = GetTenantName(house_id)

  const previousChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await dispatch(
      setHouseADataReadings({
        ...houseAData,
        previous: Number(e.target.value)
      })
    )
    const mainConsumption = computeMainConsumption(
      totalReadings.present,
      totalReadings.previous
    )
    const housesConsumptions =
      houseAData.consumption +
      houseBData.consumption +
      houseCData.consumption +
      houseDData.consumption
    const housesMainBills =
      houseAData.bill + houseBData.bill + houseCData.bill + houseDData.bill
    await dispatch(
      setHouseMainDataReadings({
        ...houseMainData,
        consumption: computeMainConsumption(
          mainConsumption,
          housesConsumptions
        ),
        bill: computeMainBill(totalReadings.bill, housesMainBills)
      })
    )
  }
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
