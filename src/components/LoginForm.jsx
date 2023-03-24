import { useRouter } from "next/router"
import React, { useState } from "react"
import client from "@/axios/client"

const LoginForm = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    client
      .post("/api/login", { username, password })
      .then((res) => {
        // if (res.status >= 300) {
        //   setError(res.message)
        //   return
        //   console.log({ status: res.status, data: res.data })
        // }
        router.push("/dashboard/")
      })
      .catch((err) => {
        setError(err.message)
        console.log(err)
      })

    console.log({ username, password })
  }

  return (
    <>
      <div
        className="hero py-20 w-full lg:w-4/5 rounded-lg backdrop-blur-sm bg-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
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
                {error && (
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{error}</span>
                    </div>
                  </div>
                )}
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
