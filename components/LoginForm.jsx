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
    axios
      .post("/api/login", { username, password })
      .then((res) => {
        if (res.status >= 300) {
          //       // setError(res.message)
          //       // return
          console.log({ status: res.status, data: res.data })
        }
        //     // router.push("/dashboard/")
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Bill Compute App</h1>
          <p className="py-6">Bill Computation and Management Application</p>
        </div>
        {error && (
          <div className="alert alert-error shadow-lg">
            <div>
              <span>Error! Task failed successfully.</span>
            </div>
          </div>
        )}
        <form>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
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
                <button className="btn btn-primary" onClick={submitHandler}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
