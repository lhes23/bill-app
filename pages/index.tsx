import Head from "next/head"
import LoginForm from "../components/LoginForm"

import connectMongo from "../util/connectMongo"
import User from "../models/user"

interface IUser {
  _id: string
  username: string
  password: string
}

// export default function Home({ users }: { users: IUser[] }) {
export default function Home() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   try {
//     await connectMongo()
//     const users = await User.find()
//     return {
//       props: {
//         users: JSON.parse(JSON.stringify(users))
//       }
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       notFound: true
//     }
//   }
// }
