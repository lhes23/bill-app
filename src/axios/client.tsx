import axios, { AxiosInstance } from "axios"

const client: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
})

export default client
