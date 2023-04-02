import Reading from "@/models/reading"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const reading = await Reading.create(req.body)
    return res.status(201).json(reading)
  } catch (error) {
    console.log(error)
  }
}
