import MonthlyBill from "@/models/monthlyBill"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const { billType } = req.query
    const monthlyBills = await MonthlyBill.find({ billType })
    return res.json(monthlyBills)
  } catch (error) {
    console.log(error)
  }
}
