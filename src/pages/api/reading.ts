import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const { bill_type } = req.body
    return res.send({ bill_type })
  } catch (error) {
    console.log(error)
  }
}
