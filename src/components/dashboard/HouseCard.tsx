import { IHouse } from "@/interfaces"
import React from "react"
import { FaHouseUser } from "react-icons/fa"

const HouseCard = ({ houses }: { houses: IHouse[] }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 justify-evenly text-center">
        {houses.map((house) => (
          <div key={house._id} className="card glass mx-4 my-4 z-0">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaHouseUser />
                {house.name}
              </h2>
              <p>{house.occupied ? "Occupied" : "Vacant"}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HouseCard
