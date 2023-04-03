import React from "react"
import NavBar from "../NavBar"
import Head from "next/head"
import { appDetails } from "@/pages/_app"
import Footer from "../Footer"

const PageLayout = ({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <>
      <Head>
        <title>{appDetails.appName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto min-h-screen bg-purple-200">
          <NavBar />
          <h2 className="my-6 text-2xl font-semibold text-center">{title}</h2>
          <div className="container grid grid-cols-1 lg:grid-cols-2 px-4">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
