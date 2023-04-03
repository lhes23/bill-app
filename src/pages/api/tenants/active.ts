import Tenant from "@/models/tenant"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const tenants = await Tenant.find({ active: true })
    res.json(tenants)
  } catch (error) {
    console.error({ error })
  }
}
