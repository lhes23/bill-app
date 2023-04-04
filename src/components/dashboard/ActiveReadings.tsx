import client from "@/axios/client"
import { setActiveReadings } from "@/redux/houseSlice"
import { useAppDispatch, useAppSelector } from "@/store"
import React from "react"

const ActiveReadings = () => {
  const dispatch = useAppDispatch()
  const { activeReadings, allHouses } = useAppSelector((state) => state.houses)
  const { activeTenants } = useAppSelector((state) => state.tenants)

  const paidHandler = async (_id: string) => {
    try {
      const res = await client.put("/api/readings", {
        _id
      })
      if (res.status < 300) {
        const response = await client.get("/api/readings/active")
        const { data } = await response
        await dispatch(setActiveReadings(data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h3 className="my-6 text-xl font-semibold">Active Readings</h3>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap table-auto">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50">
                <th className="px-4 py-3">Name of Tenant</th>
                <th className="px-4 py-3">Bill Type</th>
                <th className="px-4 py-3">Bill</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3 text-center" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {activeReadings?.map((activeReading) => (
                <tr className="" key={activeReading._id}>
                  <td className="px-4">
                    <div className="items-center text-sm">
                      <div>
                        <p className="font-semibold">
                          {
                            activeTenants?.find(
                              (t) => t._id == activeReading.tenant_id
                            )?.name
                          }
                        </p>
                        <p className="text-xs text-gray-400">
                          {
                            allHouses?.find(
                              (h) => h._id === activeReading.house_id
                            )?.name
                          }
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm">{activeReading.billType}</td>
                  <td className="text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight  text-green-700 bg-green-100 rounded-full">
                      ₱ {activeReading.bill}
                    </span>
                  </td>
                  <td className="text-sm">{activeReading.dueDate}</td>
                  <td className="text-sm text-center">
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        className="btn btn-outline btn-warning p-1"
                        onClick={() => {}}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline btn-error p-1"
                        onClick={() => paidHandler(activeReading._id)}
                      >
                        Paid
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ActiveReadings
