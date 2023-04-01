import connectMongo from "../../util/connectMongo"
import User from "../../models/user"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo()
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.error(error)
  }
}
