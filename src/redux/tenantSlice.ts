import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import client from "@/axios/client"
import { ITenant } from "@/interfaces"

export interface IInitialState {
  tenants: ITenant[]
  activeTenants: ITenant[]
}

const initialState: IInitialState = {
  tenants: [
    {
      id: 0,
      name: "",
      house_id: 0,
      fb_messenger: "",
      is_active: true,
      date_started: ""
    }
  ],
  activeTenants: []
}

export const getAllTenants = createAsyncThunk(
  "appHouses/getAllTenants",
  async () => {
    try {
      const response = await client.get("/api/tenants")
      const { data } = await response
      return { allTenants: data }
    } catch (error) {
      console.log(error)
    }
  }
)

// export const getActiveTenants = createAsyncThunk(
//   "appHouses/getActiveTenants",
//   async () => {
//     try {
//       const response = await client.get("/api/active-tenants")
//       const { data } = await response
//       return { activeTenants: data }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// )

export const tenantSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    setAllTenants: (state, action) => {
      state.tenants = action.payload
    },
    setActiveTenants: (state, action) => {
      state.activeTenants = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTenants.fulfilled, (state, action) => {
      state.tenants = action.payload?.allTenants
    })
    // builder.addCase(getActiveTenants.fulfilled, (state, action) => {
    //   state.activeTenants = action.payload?.activeTenants
    // })
  }
})

export const { setAllTenants, setActiveTenants } = tenantSlice.actions

export default tenantSlice.reducer
