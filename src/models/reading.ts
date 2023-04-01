import { Schema, models, model } from "mongoose"

const ReadingSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  bill_type: {
    type: String,
    required: true,
    unique: true
  }
})

const Reading = models?.Reading || model("Reading", ReadingSchema)

export default Reading
