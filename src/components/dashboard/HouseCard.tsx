import { IHouse } from "@/interfaces"
import React from "react"
import { FaHouseUser } from "react-icons/fa"

const HouseCard = ({ houses }: { houses: IHouse[] }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 pt-4 justify-evenly text-center lg:gap-5">
        {houses?.map((house) => (
          <div key={house._id} className="card glass my-4 z-0">
            <figure>
              <img
                src={
                  house.occupied
                    ? `/assets/imgs/green-house.jpg`
                    : `/assets/imgs/red-house.jpg`
                }
                alt="car!"
              />
            </figure>
            <div className="card-body p-1 text-center">
              <h2 className="card-title text-sm lg:text-xl justify-center">
                {house.name}
              </h2>
              <p className="text-xs lg:text-lg">
                {house.occupied ? "Occupied" : "Vacant"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HouseCard
