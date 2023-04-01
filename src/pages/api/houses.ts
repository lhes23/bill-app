import House from "@/models/house"
import connectMongo from "@/util/connectMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const houses = await House.find()
    return res.json(houses)
  } catch (error) {
    return res.json(error)
  }
}
