import axios, { AxiosInstance } from "axios"

const client: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV == "development"
      ? `${process.env.NEXT_PUBLIC_DEV_BASE_URL}`
      : `${process.env.NEXT_PUBLIC_PROD_BASE_URL}`
})

export default client
