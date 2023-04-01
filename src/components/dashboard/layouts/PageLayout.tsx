import React from "react"

const PageLayout = ({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <div>
      <h2 className="my-6 text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default PageLayout
