import React from "react"
import { FaHouseUser } from "react-icons/fa"

const HouseCard = () => {
  return (
    <>
      <div className="card w-3/4 lg:w-96 glass">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HouseCard
