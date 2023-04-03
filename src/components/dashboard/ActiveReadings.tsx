import { useAppSelector } from "@/store"
import React from "react"

const ActiveReadings = () => {
  const { activeReadings, allHouses } = useAppSelector((state) => state.houses)
  const { activeTenants } = useAppSelector((state) => state.tenants)
  return (
    <>
      <h3 className="my-6 text-xl font-semibold">Active Readings</h3>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
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
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {activeReadings.map((activeReading) => (
                <tr className="" key={activeReading._id}>
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      {/* Avatar with inset shadow */}
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {
                            activeTenants.find(
                              (t) => t._id == activeReading.tenant_id
                            )?.name
                          }
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {
                            allHouses.find(
                              (h) => h._id === activeReading.house_id
                            )?.name
                          }
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {activeReading.billType}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight  text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      {activeReading.bill}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{activeReading.dueDate}</td>
                  <td className="px-4 py-3 text-sm">Edit</td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => {}}
                    >
                      Paid
                    </button>
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
