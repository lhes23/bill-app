import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import client from "../axios/client"
import { IHouse, IHouseInitial, IReading, ITotalReading } from "../interfaces"

export const getAllHouses = createAsyncThunk(
  "appHouses/getAllHouses",
  async () => {
    try {
      const response = await client.get("/api/houses")
      const { data } = await response
      return { allHouses: data }
    } catch (error) {
      console.log(error)
    }
  }
)

export const getAllReadings = createAsyncThunk(
  "appHouses/getAllReadings",
  async () => {
    try {
      // const response = await client.get("readings/")
      const response = await client.get("yearly-bills/")
      const { data } = response
      return { allReadings: data }
    } catch (error) {
      console.log(error)
    }
  }
)

export const addReading = createAsyncThunk(
  "appHouses/addReading",
  async (data) => {
    try {
      const response = await client.post("readings/", data)
      return response
    } catch (error) {
      console.log(error)
    }
  }
)

interface IInitialState {
  // houses: IHouseInitial[]
  houseAData: IHouseInitial
  houseBData: IHouseInitial
  houseCData: IHouseInitial
  houseDData: IHouseInitial
  houseMainData: IHouseInitial
  pesoPer: number
  totalReadings: ITotalReading
  allHouses: IHouse[]
  allReadings: IReading[]
  activeReadings: IReading[]
}

const initialHouseData: IHouseInitial = {
  _id: "",
  name: "",
  tenantDetails: {
    _id: "",
    name: "",
    active: true,
    date_started: "",
    house_id: ""
  },
  previous: null,
  present: null,
  consumption: null,
  bill: null
}

const initialState: IInitialState = {
  // houses: [],
  houseAData: { ...initialHouseData, name: "House A" },
  houseBData: { ...initialHouseData, name: "House B" },
  houseCData: { ...initialHouseData, name: "House C" },
  houseDData: { ...initialHouseData, name: "House D" },
  houseMainData: {
    ...initialHouseData,
    name: "Main",
    tenantDetails: { ...initialHouseData.tenantDetails, name: "Main" }
  },
  pesoPer: 0,
  totalReadings: {
    name: "wholeHouse",
    billType: "electric",
    previous: null,
    present: null,
    consumption: 0,
    bill: null,
    dueDate: "",
    startDate: "",
    endDate: ""
  },
  allHouses: [],
  allReadings: [],
  activeReadings: []
}

export const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setActiveReadings: (state, action) => {
      state.activeReadings = action.payload
    },
    setAllHouses: (state, action) => {
      state.allHouses = action.payload
    },
    // setHousesReadings: (state, action) => {
    //   state.houses = action.payload
    // },
    setPesoPer: (state, action) => {
      state.pesoPer = action.payload
    },
    setTotalReadings: (state, action) => {
      state.totalReadings = action.payload
    },
    setHouseADataReadings: (state, action) => {
      state.houseAData = action.payload
    },
    setHouseBDataReadings: (state, action) => {
      state.houseBData = action.payload
    },
    setHouseCDataReadings: (state, action) => {
      state.houseCData = action.payload
    },
    setHouseDDataReadings: (state, action) => {
      state.houseDData = action.payload
    },
    setHouseMainDataReadings: (state, action) => {
      state.houseMainData = action.payload
    },
    setTotalReadingsDueDate: (state, action) => {
      state.totalReadings.dueDate = action.payload
    },
    setTotalReadingsStartDate: (state, action) => {
      state.totalReadings.startDate = action.payload
    },
    setTotalReadingsEndDate: (state, action) => {
      state.totalReadings.endDate = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHouses.fulfilled, (state, action) => {
      state.allHouses = action.payload?.allHouses
    })
    builder.addCase(getAllReadings.fulfilled, (state, action) => {
      state.allReadings = action.payload?.allReadings
    })
  }
})

export const {
  setActiveReadings,
  setAllHouses,
  // setHousesReadings,
  setPesoPer,
  setTotalReadings,
  setHouseADataReadings,
  setHouseBDataReadings,
  setHouseCDataReadings,
  setHouseDDataReadings,
  setHouseMainDataReadings,
  setTotalReadingsDueDate,
  setTotalReadingsStartDate,
  setTotalReadingsEndDate
} = houseSlice.actions

export default houseSlice.reducer
