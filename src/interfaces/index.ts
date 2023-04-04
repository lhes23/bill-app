export interface IHouseReading {
  name: string
  house_id: string
  tenant: string
  tenant_id: string
  previous: number
  present: number
}

export interface Reading extends IHouseReading {
  consumption: number
  bill: number
  dueDate: Date
  startDate: Date
  endDate: Date
}

export interface IHouse {
  _id: string
  name: string
  occupied: boolean
  color: string
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

export interface IHouseInitial {
  _id: string
  name: string
  tenantDetails: {
    _id: string
    name: string
    active: boolean
    date_started: string
    house_id: string
  }
  previous: number | null
  present: number | null
  consumption: number | null
  bill: number | null
}

export interface ITotalReading {
  name: string
  billType: string
  previous: number | null
  present: number | null
  consumption: number
  bill: number | null
  dueDate: string
  startDate: string
  endDate: string
}

// Tenants' Interface
export interface ITenant {
  _id: string
  name: string
  house_id: string
  fb_messenger: string
  active: boolean
  date_started: string
}

export interface IAllYearlyBills {
  id: number
  year: number
  month: string
  bill_type: string
  bill: number
}

// export interface IReading {
//   id: number
//   bill_type: string
//   due_date: string
//   start_date: string
//   end_date: string
//   previous_reading: number
//   present_reading: number
//   consumption: number
//   peso_per_consumption: number
//   bill: number
//   status: string
//   created_at: string
//   paid_at: string | null
//   house_id: number
//   tenant_id: number
// }

// Dashboard index reading interface
export interface IReading {
  _id: string
  house_id: string
  tenant_id: string
  billType: string
  dueDate: string
  startDate: string
  endDate: string
  previousReading: number
  presentReading: number
  consumption: number
  pesoPer: number
  bill: number
  paid: boolean
  paidDate: string | null
}

// Chart's Interface
export interface IDataSets {
  _id: string
  bill: number
  billType: string
  month: string
  year: string
}

export interface IAreaChartProps {
  datasets: IDataSets[]
  label: string
  color: string
  fillColor: string
}
