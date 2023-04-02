import { IHouseInitial, ITenant } from "@/interfaces"
import React from "react"
import { styles } from "./hooks/styles"

type IProps = {
  // house: IHouseInitial
  house: {
    tenantDetails: ITenant | undefined
    _id?: number | undefined
    name: string
    occupied?: boolean | undefined
    color?: string | undefined
    previous: number
    present: number
    consumption: number
    bill: number
  }
  // tenantName: string
  previousChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {}
  presentChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {}
}

const HouseComponent = ({
  house,
  previousChangeHandler,
  presentChangeHandler
}: IProps) => {
  return (
    <>
      <h2 className="p-2">{house.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="relative">
          <h2 className={styles.h2}>{house.tenantDetails?.name}</h2>
          <label htmlFor="previous_reading" className={styles.tenantLabel}>
            Name of tenant
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="number"
            id="previous_reading"
            className={styles.input}
            placeholder="Previous Reading"
            value={house.previous}
            onChange={previousChangeHandler}
          />
          <label htmlFor="previous_reading" className={styles.prevPresLabel}>
            Previous Reading
          </label>
        </div>

        <div className="relative">
          <input
            type="number"
            id="present_reading"
            className={styles.input}
            placeholder="Present Reading"
            value={house.present}
            onChange={presentChangeHandler}
          />
          <label htmlFor="present_reading" className={styles.prevPresLabel}>
            Present Reading
          </label>
        </div>
      </div>

      <div className="sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}

// const styles = {
//   h2: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
//   input:
//     "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
//   tenantLabel:
//     "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
//   prevPresLabel:
//     "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
// }

export default HouseComponent
