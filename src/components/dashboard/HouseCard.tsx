import { IHouse } from "@/interfaces"
import React from "react"
import { FaHouseUser } from "react-icons/fa"

const HouseCard = ({ houses }: { houses: IHouse[] }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 justify-evenly text-center gap-5">
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
