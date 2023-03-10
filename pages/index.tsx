import Head from "next/head"
import { InferGetServerSidePropsType } from "next"
import RegisterForm from "../components/RegisterForm"
import LoginForm from "../components/LoginForm"

import connectMongo from "../util/connectMongo"
import User from "../models/user"

interface User {
  _id: string
  username: string
  password: string
}

export default function Home({ users }: { users: User[] }) {
  console.log(users)
  return (
    <div>
      <h1>Hello World</h1>
      {users.map((user: User) => (
        <div key={user._id}>
          <p>{user.username}</p>
          <p>{user.password}</p>
        </div>
      ))}
      <RegisterForm />
      <LoginForm />
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    await connectMongo()
    const users = await User.find()
    return {
      props: {
        users: JSON.parse(JSON.stringify(users))
      }
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true
    }
  }
}
