import React, { useEffect } from "react"
import HouseCard from "@/components/dashboard/HouseCard"
import AreaChart from "@/components/dashboard/AreaChart"
import getData from "@/axios/getData"
import { useAppDispatch } from "@/store"
import { setActiveTenants } from "@/redux/tenantSlice"
import PageLayout from "@/components/dashboard/layouts/PageLayout"
import { IDataSets, IHouse, ITenant } from "@/interfaces"

export type IProps = {
  houses: IHouse[]
  activeTenants: ITenant[]
  electricBills: IDataSets[]
  waterBills: IDataSets[]
}

const Dashboard = ({
  houses,
  activeTenants,
  electricBills,
  waterBills
}: IProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setActiveTenants(activeTenants))
  }, [])

  return (
    <>
      <PageLayout title="Dashboard">
        <section>
          <HouseCard houses={houses} />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="m-1">
            <AreaChart
              datasets={electricBills}
              label="Electric"
              color="green"
              fillColor="rgba(23,23,12,0.6)"
            />
          </div>
          <div className="m-1">
            <AreaChart
              datasets={waterBills}
              label="Water"
              color="blue"
              fillColor="rgba(23,23,12,0.6)"
            />
          </div>
        </section>
      </PageLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const houses = await getData("/api/houses")
  const activeTenants = await getData("/api/active-tenants")
  const electricBills = await getData("/api/monthly-bills/electric")
  const waterBills = await getData("/api/monthly-bills/water")
  return {
    props: {
      houses,
      activeTenants,
      electricBills,
      waterBills
    }
  }
}

export default Dashboard
