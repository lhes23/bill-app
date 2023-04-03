import MonthlyBill from "@/models/monthlyBill"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    switch (req.method) {
      case "GET":
        let monthlyBills = await MonthlyBill.find()
        return res.json(monthlyBills)
      case "POST":
        monthlyBills = await MonthlyBill.create(req.body)
        return res.json(monthlyBills)
      default:
        return res.json({ msg: "No Record Found" })
    }
  } catch (error) {
    console.log(error)
  }
}
