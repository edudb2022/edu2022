import axios from "axios"
import { DEFAULT_BASE_URL } from "../axios"

const apiService = {
  getSchools: async () => {
    try {
      const data = await axios.get(`${DEFAULT_BASE_URL}/schools`)
      return data.data.data
    } catch (error) {
      console.error(error)
    }
  },
  getSchoolDetailReivew: async ({ queryKey }: any) => {
    const id = queryKey[1].id
    try {
      const data = await axios.get(`${DEFAULT_BASE_URL}/school-reviews/${id}`)
      return data.data.data
    } catch (error) {
      console.error(error)
    }
  },

  postVote: async ({ id, value }: { id: number; value: number }) => {
    // const id = queryKey[1].id
    try {
      await axios.post(`${DEFAULT_BASE_URL}/school-reviews/${id}/votes`, {
        // body: {
        value
        // }
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export { apiService }
