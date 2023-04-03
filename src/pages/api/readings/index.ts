import Reading from "@/models/reading"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    let reading
    switch (req.method) {
      case "GET":
        reading = await Reading.find()
        return res.json(reading)
      case "POST":
        reading = await Reading.create(req.body)
        return res.status(201).json(reading)
      case "PUT":
        const { _id } = req.body
        reading = await Reading.findByIdAndUpdate(_id, {
          paid: true,
          paidDate: new Date()
        })
        return res.status(201).json(reading)
      default:
        return res.json({ msg: "No Record Found" })
    }
  } catch (error) {
    console.log(error)
  }
}
