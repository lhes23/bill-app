import User from "../../models/user"
import connectMongo from "../../util/connectMongo"

export default async (req, res) => {
  try {
    await connectMongo()
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user) {
      if (user.password === password) {
        return res.json({ user })
      } else {
        return res.json("Wrong username or password")
      }
    } else {
      return res.json("No User found")
    }
  } catch (error) {
    console.error(error)
  }
}
