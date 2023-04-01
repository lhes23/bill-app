import client from "./client"

const getData = async (url: string) => {
  try {
    const res = await client.get(url)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default getData
