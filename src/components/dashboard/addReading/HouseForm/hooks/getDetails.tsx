import { useAppSelector } from "store"

export const GetHouseId = (house: string) => {
  const { allHouses } = useAppSelector((state) => state.houses)
  return allHouses?.filter((h) => h.name === house).map((n) => n.id)[0]
}

export const GetTenantName = (houseId: number) => {
  const { activeTenants } = useAppSelector((state) => state.tenants)
  return activeTenants
    .filter((t) => t.house_id === houseId)
    .map((n) => n.name)[0]
}

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
