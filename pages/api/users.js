// import clientPromise from "../../lib/mongodb"

// export default async (req, res) => {
//   try {
//     const client = await clientPromise
//     const db = client.db("bill_app_db")

//     const users = await db.collection("users").find({}).toArray()
//     res.json(users)
//   } catch (error) {
//     console.error(error)
//   }
// }

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
