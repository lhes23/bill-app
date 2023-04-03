import Tenant from "@/models/tenant"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    switch (req.method) {
      case "GET":
        const tenants = await Tenant.find()
        return res.json(tenants)
      case "POST":
        const tenant = await Tenant.create(req.body)
        return res.status(201).json(tenant)
      default:
        return res.json({ msg: "No Record Found" })
    }
  } catch (error) {
    console.log(error)
  }
}
