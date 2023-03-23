import React from "react"
import { FaHouseUser } from "react-icons/fa"

const HouseCard = () => {
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
        <div
          className={`p-3 mr-4 text-red-500 bg-blue-100 rounded-full hover:cursor-pointer`}
        >
          <FaHouseUser size={30} />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600">house.name</p>
          <p className="text-lg font-semibold text-gray-700">
            {/* {house.is_occupied ? "Occupied" : "Vacant"} */}
          </p>
        </div>
      </div>
    </>
  )
}

export default HouseCard
