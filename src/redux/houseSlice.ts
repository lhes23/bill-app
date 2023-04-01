import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import client from "../axios/client"
import {
  IAllYearlyBills,
  IHouse,
  IHouseInitial,
  IReading,
  ITotalReading
} from "../interfaces"

export const getAllHouses = createAsyncThunk(
  "appHouses/getAllHouses",
  async () => {
    try {
      const response = await client.get("houses/")
      const { data } = await response
      return { allHouses: data }
    } catch (error) {
      console.log(error)
    }
  }
)

export const getAllYearlyBills = createAsyncThunk(
  "appHouses/getAllYearlyBills",
  async () => {
    try {
      const response = await client.get("yearly-bills/")
      const { data } = await response
      return { allYearlyBills: data }
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
  houses: IHouseInitial[]
  houseAData: IHouseInitial
  houseBData: IHouseInitial
  houseCData: IHouseInitial
  houseDData: IHouseInitial
  houseMainData: IHouseInitial
  pesoPer: number
  totalReadings: ITotalReading
  allHouses: IHouse[]
  allYearlyBills: IAllYearlyBills[]
  allReadings: IReading[]
}

const initialHouseData: IHouseInitial = {
  house_id: 0,
  tenant_id: 0,
  name: "",
  tenant: "",
  previous: 0,
  present: 0,
  consumption: 0,
  bill: 0
}

const initialState: IInitialState = {
  houses: [],
  houseAData: { ...initialHouseData, name: "House A" },
  houseBData: { ...initialHouseData, name: "House B" },
  houseCData: { ...initialHouseData, name: "House C" },
  houseDData: { ...initialHouseData, name: "House D" },
  houseMainData: { ...initialHouseData, name: "Main", tenant: "Main" },
  pesoPer: 0,
  totalReadings: {
    name: "wholeHouse",
    billType: "Electric",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0,
    dueDate: "",
    startDate: "",
    endDate: ""
  },
  allHouses: [],
  allYearlyBills: [],
  allReadings: []
}

export const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHousesReadings: (state, action) => {
      state.houses = action.payload
    },
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
    builder.addCase(getAllYearlyBills.fulfilled, (state, action) => {
      state.allYearlyBills = action.payload?.allYearlyBills
    })
    builder.addCase(getAllReadings.fulfilled, (state, action) => {
      state.allReadings = action.payload?.allReadings
    })
  }
})

export const {
  setHousesReadings,
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
