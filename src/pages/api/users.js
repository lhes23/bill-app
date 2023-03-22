import connectMongo from "../../util/connectMongo"
import User from "../../models/user"

export default async (req, res) => {
  try {
    await connectMongo()
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.error(error)
  }
}
