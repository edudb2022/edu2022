import axios from "axios"
import {
  ICreateProgrammeReviewReq,
  ICreateSchoolReviewReq
} from "../../types/api"
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
  getSchoolDetailReview: async ({ queryKey }: any) => {
    const id = queryKey[1].id
    try {
      const data = await axios.get(`${DEFAULT_BASE_URL}/school-reviews/${id}`)
      return data.data.data
    } catch (error) {
      console.error(error)
    }
  },

  createSchoolReview: async (body: ICreateSchoolReviewReq) => {
    const res = await axios.post(`${DEFAULT_BASE_URL}/school-reviews`, body)
    return res
  },

  createProgrammeReview: async (body: ICreateProgrammeReviewReq) => {
    const res = await axios.post(`${DEFAULT_BASE_URL}/program-reviews`, body)
    return res
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
