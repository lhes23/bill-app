import { Schema, models, model } from "mongoose"

const MonthlyBillSchema = new Schema({
  year: { type: String },
  month: { type: String },
  billType: { type: String },
  bill: { type: Number }
})

const MonthlyBill =
  models?.MonthlyBill || model("MonthlyBill", MonthlyBillSchema)

export default MonthlyBill
