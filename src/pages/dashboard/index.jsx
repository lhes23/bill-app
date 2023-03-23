import React from "react"
import Head from "next/head"
import NavBar from "@/components/dashboard/navbar"
import { appDetails } from "@/pages/_app"

const Dashboard = () => {
  console.log(process.env.NODE_ENV)
  return (
    <>
      <Head>
        <title>{appDetails.appName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <NavBar />
      </main>
    </>
  )
}

export default Dashboard