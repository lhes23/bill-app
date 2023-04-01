import TotalReadingForm from "@/components/dashboard/addReading/TotalReadingForm"
import PageLayout from "@/components/dashboard/layouts/PageLayout"
import { useAppSelector } from "@/store"
import React, { FormEvent } from "react"

const AddReading = () => {
  const { totalReadings } = useAppSelector((state) => state.houses)
  const formHandler = (e: FormEvent) => {
    e.preventDefault()
    console.log({ totalReadings })
  }
  return (
    <>
      <PageLayout title="Add a Reading">
        <div className="flex justify-center">
          <div className="px-4 py-3 mb-8 bg-gradient-to-tr from-purple-200 to-pink-300 rounded-lg shadow-md md:w-[50vw]">
            <TotalReadingForm />
            {/* <HouseAComponentForm />
            <HouseBComponentForm />
            <HouseCComponentForm />
            <HouseDComponentForm /> */}
            <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-wide"
                onClick={formHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default AddReading
