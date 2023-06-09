import { useAppSelector } from "@/store"

export const computeMainConsumption = (
  totalReadingsConsumption: number,
  housesConsumptions: number
) => {
  return totalReadingsConsumption - housesConsumptions
}

export const computeMainBill = (
  totalReadingsBill: number,
  housesMainBills: number
) => {
  return totalReadingsBill - housesMainBills
}

export const computeTotalConsumption = (
  totalReadingsPresent: number,
  totalReadingsPrevious: number
) => totalReadingsPresent - totalReadingsPrevious

export const getBillsAndConsumptions = (
  present: number,
  previous: number,
  pesoper: number
) => {
  const consumption = present - previous
  const bill = consumption * pesoper
  return {
    consumption,
    bill
  }
}

export const getHouseDetails = (houseData: any) => {
  const { allHouses } = useAppSelector((state) => state.houses)
  const { activeTenants } = useAppSelector((state) => state.tenants)
  const data = allHouses?.find((house) => house.name === houseData.name)

  const houseDetails = {
    ...houseData,
    ...data,
    tenantDetails: activeTenants?.find(
      (tenant) => tenant.house_id === data?._id
    )
  }
  return houseDetails
}
