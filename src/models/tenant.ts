import { Schema, models, model } from "mongoose"

const TenantSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  fb_messenger: {
    type: String
  },
  active: {
    type: Boolean
  },
  date_started: {
    type: Date
  },
  house_id: {
    type: String
  }
})

const Tenant = models?.Tenant || model("Tenant", TenantSchema)

export default Tenant
