import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useAppDispatch, useAppSelector } from "@/store"
import {
  setTotalReadings,
  setTotalReadingsDueDate,
  setTotalReadingsEndDate,
  setTotalReadingsStartDate
} from "@/reduxSlices/houseSlice"

const TotalReadingForm = () => {
  const { totalReadings } = useAppSelector((state) => state.houses)
  const dispatch = useAppDispatch()

  const [dueDateLocal, setDueDateLocal] = useState<Date>(
    //   totalReadings.dueDate ? new Date(totalReadings.dueDate) : new Date()
    new Date()
  )
  const [startDateLocal, setStartDateLocal] = useState<Date>(
    //   totalReadings.startDate ? new Date(totalReadings.startDate) : new Date()
    new Date()
  )
  const [endDateLocal, setEndDateLocal] = useState<Date>(
    //   totalReadings.endDate ? new Date(totalReadings.endDate) : new Date()
    new Date()
  )

  const formatDate = (myDate: Date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    } as const
    return myDate.toLocaleDateString("en-US", options)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <label className={styles.label}>
            <span className={styles.labelSpan}>Due Date</span>
          </label>
          <DatePicker
            selected={dueDateLocal}
            onChange={(date: Date) => {
              setDueDateLocal(date)
              const newDate = formatDate(date)
              dispatch(setTotalReadingsDueDate(newDate))
            }}
            className={styles.input}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 my-4">
        <div className="relative">
          <label className={styles.label}>
            <span className={styles.labelSpan}>Start Date Covered</span>
          </label>
          <DatePicker
            selectsStart
            selected={startDateLocal}
            startDate={startDateLocal}
            endDate={endDateLocal}
            onChange={(date: Date) => {
              setStartDateLocal(date)
              const newDate = formatDate(date)
              dispatch(setTotalReadingsStartDate(newDate))
            }}
            className={styles.input}
          />
        </div>
        <div className="relative">
          <label className={styles.label}>
            <span className={styles.labelSpan}>End Date Covered</span>
          </label>
          <DatePicker
            selectsEnd
            selected={endDateLocal}
            startDate={startDateLocal}
            endDate={endDateLocal}
            minDate={startDateLocal}
            onChange={(date: Date) => {
              setEndDateLocal(date)
              const newDate = formatDate(date)
              dispatch(setTotalReadingsEndDate(newDate))
            }}
            className={styles.input}
          />
        </div>
      </div>

      <div className="mt-4 text-sm">
        <span className={styles.labelSpan}>Bill Type</span>
        <div className="mt-2 grid grid-cols-2 gap-2 md:gap-4">
          <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
            <input
              id="electric"
              type="radio"
              name="bill"
              value="Electric"
              className={styles.radio}
              defaultChecked
              onChange={(e) =>
                dispatch(
                  setTotalReadings({
                    ...totalReadings,
                    billType: e.target.value
                  })
                )
              }
            />
            <span className="ml-2">Electric Bill</span>
          </label>
          <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
            <input
              id="water"
              type="radio"
              name="bill"
              value="Water"
              className={styles.radio}
              onChange={(e) =>
                dispatch(
                  setTotalReadings({
                    ...totalReadings,
                    billType: e.target.value
                  })
                )
              }
            />
            <span className="ml-2">Water Bill</span>
          </label>
        </div>
      </div>

      <h4 className="text-2xl my-4">Total Reading</h4>
      <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
        <div className="relative">
          <label className={styles.label}>
            <span className={styles.labelSpan}>Previous Reading</span>
          </label>

          <input
            type="number"
            id="previous_reading"
            className={styles.input}
            placeholder="Previous Reading"
            value={totalReadings.previous}
            onChange={(e) =>
              dispatch(
                setTotalReadings({
                  ...totalReadings,
                  previous: Number(e.target.value)
                })
              )
            }
          />
        </div>
        <div className="relative">
          <label className={styles.label}>
            <span className={styles.labelSpan}>Present Reading</span>
          </label>

          <input
            type="number"
            id="present_reading"
            className={styles.input}
            placeholder="Present Reading"
            value={totalReadings.present}
            onChange={(e) =>
              dispatch(
                setTotalReadings({
                  ...totalReadings,
                  present: Number(e.target.value)
                })
              )
            }
          />
        </div>
      </div>
      <div className="relative my-4">
        <label className={styles.label}>
          <span className="text-gray-700 dark:text-gray-400">Total Bill</span>
        </label>
        <input
          type="number"
          id="total_reading"
          className={styles.input}
          placeholder="Total Bill"
          value={totalReadings.bill}
          onChange={(e) =>
            dispatch(
              setTotalReadings({
                ...totalReadings,
                bill: Number(e.target.value)
              })
            )
          }
        />
      </div>

      <div className="sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}

const styles = {
  labelSpan: "text-gray-700 dark:text-gray-400 z-0",
  input:
    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  label:
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
  radio:
    "text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray",
  submitBtn:
    "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
  submitSpan:
    "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-medium"
}

export default TotalReadingForm
