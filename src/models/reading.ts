import { Schema, models, model } from "mongoose"

const ReadingSchema = new Schema({
  // _id: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  house_id: {
    type: String,
    required: true
  },
  tenant_id: {
    type: String,
    required: true
  },
  billType: {
    type: String
  },
  dueDate: {
    type: String
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  previousReading: {
    type: Number
  },
  presentReading: {
    type: Number
  },
  consumption: {
    type: Number
  },
  pesoPer: {
    type: Number
  },
  bill: {
    type: Number
  }
})

const Reading = models?.Reading || model("Reading", ReadingSchema)

export default Reading
