import Reading from "@/models/reading"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    switch (req.method) {
      case "GET":
        const readings = await Reading.find()
        return res.json(readings)
      case "POST":
        const reading = await Reading.create(req.body)
        return res.status(201).json(reading)
      default:
        return res.json({ msg: "No Record Found" })
    }
  } catch (error) {
    console.log(error)
  }
}
