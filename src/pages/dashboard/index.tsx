import React, { useEffect } from "react"
import Head from "next/head"
import { appDetails } from "@/pages/_app"
import HouseCard from "@/components/dashboard/HouseCard"
import Footer from "@/components/dashboard/Footer"
import AreaChart from "@/components/dashboard/AreaChart"
import getData from "@/axios/getData"
import { useAppDispatch, useAppSelector } from "@/store"
import { getAllTenants, setActiveTenants } from "@/redux/tenantSlice"
import PageLayout from "@/components/dashboard/layouts/PageLayout"
import { IDataSets, IHouse, ITenant } from "@/interfaces"

const datasets: IDataSets[] = [
  {
    id: 1,
    bill: 300,
    bill_type: "electric",
    month: "jan",
    year: 2023
  },
  {
    id: 2,
    bill: 500,
    bill_type: "electric",
    month: "feb",
    year: 2023
  }
]

export type IProps = {
  houses: IHouse[]
  activeTenants: ITenant[]
}

const Dashboard = ({ houses, activeTenants }: IProps) => {
  const state = useAppSelector((state) => state.tenants)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setActiveTenants(activeTenants))
  }, [])

  return (
    <>
      <PageLayout title="Dashboard">
        <HouseCard houses={houses} />

        <AreaChart
          datasets={datasets}
          label="Electric"
          color="green"
          fillColor="rgba(23,23,12,0.6)"
        />
        <AreaChart
          datasets={datasets}
          label="Water"
          color="blue"
          fillColor="rgba(23,23,12,0.6)"
        />
      </PageLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const houses = await getData("/api/houses")
  const activeTenants = await getData("/api/active-tenants")
  return {
    props: {
      houses,
      activeTenants
    }
  }
}

export default Dashboard
