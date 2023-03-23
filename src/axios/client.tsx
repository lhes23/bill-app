import axios, { AxiosInstance } from "axios"

const client: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://192.168.100.30:3000" : ""
})

export default client
