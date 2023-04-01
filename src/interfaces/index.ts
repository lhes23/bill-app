export interface IHouseReading {
  name: string
  house_id: number
  tenant: string
  tenant_id: number
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
  id: number
  name: string
  is_occupied: boolean
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
  house_id: number
  tenant_id: number
  name: string
  tenant: string
  previous: number
  present: number
  consumption: number
  bill: number
}

export interface ITotalReading {
  name: string
  billType: string
  previous: number
  present: number
  consumption: number
  bill: number
  dueDate: string
  startDate: string
  endDate: string
}

export interface ITenant {
  id: number
  name: string
  house_id: number
  fb_messenger: string
  is_active: boolean
  date_started: string
}

export interface IAllYearlyBills {
  id: number
  year: number
  month: string
  bill_type: string
  bill: number
}

export interface IReading {
  id: number
  bill_type: string
  due_date: string
  start_date: string
  end_date: string
  previous_reading: number
  present_reading: number
  consumption: number
  peso_per_consumption: number
  bill: number
  status: string
  created_at: string
  paid_at: string | null
  house_id: number
  tenant_id: number
}

export interface IDataSets {
  id: number
  bill: number
  bill_type: string
  month: string
  year: number
}

export interface IReading {
  id: number
  bill_type: string
  due_date: string
  start_date: string
  end_date: string
  previous_reading: number
  present_reading: number
  consumption: number
  peso_per_consumption: number
  bill: number
  status: string
  created_at: string
  paid_at: string | null
  house_id: number
  tenant_id: number
}
