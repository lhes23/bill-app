import Head from "next/head"
import LoginForm from "@/components/LoginForm"

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
    <>
      <Head>
        <title>Billing App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen"> */}
      <main className="bg-[url('/assets/imgs/home-bg.jpg')] bg-fixed bg-cover min-h-screen">
        <div className="">
          <LoginForm />
        </div>
      </main>
    </>
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
