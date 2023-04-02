import React from "react"
import NavBar from "../NavBar"

const PageLayout = ({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <div className="container mx-auto min-h-screen bg-purple-200">
      <NavBar />
      <h2 className="my-6 text-2xl font-semibold text-center">{title}</h2>
      <div className="container">{children}</div>
    </div>
  )
}

export default PageLayout
