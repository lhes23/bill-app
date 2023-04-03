import Reading from "@/models/reading"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const readings = await Reading.find({ paid: false })
    return res.json(readings)
  } catch (error) {
    console.log(error)
  }
}
