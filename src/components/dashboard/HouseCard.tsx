import React from "react"
import { FaHouseUser } from "react-icons/fa"

const houses = [
  {
    id: "1",
    name: "House A",
    status: true
  },
  {
    id: "2",
    name: "House B",
    status: true
  },
  {
    id: "3",
    name: "House C",
    status: true
  },
  {
    id: "4",
    name: "House D",
    status: true
  }
]

const HouseCard = () => {
  return (
    <>
      <div className="flex p-20">
        {houses.map((house) => (
          <div key={house.id} className="card w-3/4 lg:w-96 glass mx-2">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{house.name}</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HouseCard
