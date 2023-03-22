import axios from "axios"
import { useRouter } from "next/router"
import React, { useState } from "react"

const LoginForm = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    // axios
    //   .post("/api/login", { username, password })
    //   .then((res) => {
    //     if (res.status >= 300) {
    //       // setError(res.message)
    //       // return
    // console.log({ status: res.status, data: res.data })
    // }
    //     // router.push("/dashboard/")
    // })
    // .catch((err) => console.log(err))

    console.log({ username, password })
  }
  return (
    <>
      <div
        className="hero py-20 w-4/5 rounded-lg backdrop-blur-sm bg-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
"
      >
        <div className="hero-content flex-col lg:flex-row lg:px-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Billing Compute App</h1>
            <p className="py-6">
              Login to manage your Billing Information and computation for your
              house rental services
            </p>
          </div>
          <form onSubmit={submitHandler}>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm
