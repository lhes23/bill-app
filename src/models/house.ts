import { Schema, models, model } from "mongoose"

const HouseSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  occupied: {
    type: Boolean
  },
  color: {
    type: String
  }
})

const House = models?.House || model("House", HouseSchema)

export default House
