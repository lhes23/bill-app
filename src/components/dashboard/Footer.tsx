import { appDetails } from "@/pages/_app"
import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>{`Copyright © ${new Date().getFullYear()} - All right reserved ${
            appDetails.appName
          }`}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
