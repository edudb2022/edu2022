import axios from "axios"
import {
  ICreateInternshipReviewReq,
  ICreateInterviewReviewReq,
  ICreateProgrammeReviewReq,
  ICreateSchoolReviewReq,
  IVoteReq
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

  getProgrammeDetailReview: async ({ queryKey }: any) => {
    const id = queryKey[1].id
    try {
      const data = await axios.get(`${DEFAULT_BASE_URL}/program-reviews/${id}`)
      return data.data.data
    } catch (error) {
      console.error(error)
    }
  },
  getInternshipDetailReview: async ({ queryKey }: any) => {
    const id = queryKey[1].id
    try {
      const data = await axios.get(
        `${DEFAULT_BASE_URL}/internship-reviews/${id}`
      )
      return data.data.data
    } catch (error) {
      console.error(error)
    }
  },

  getInterviewDetailReview: async ({ queryKey }: any) => {
    const id = queryKey[1].id
    try {
      const data = await axios.get(
        `${DEFAULT_BASE_URL}/interview-reviews/${id}`
      )
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
  createInterviewReview: async (body: ICreateInterviewReviewReq) => {
    const res = await axios.post(`${DEFAULT_BASE_URL}/interview-reviews`, body)
    return res
  },

  createInternshipReview: async (body: ICreateInternshipReviewReq) => {
    const res = await axios.post(`${DEFAULT_BASE_URL}/internship-reviews`, body)
    return res
  },

  voteSchoolReview: async (param: IVoteReq) => {
    const { value, id } = param
    try {
      await axios.post(`${DEFAULT_BASE_URL}/school-reviews/${id}/votes`, {
        value
      })
    } catch (error) {
      throw error
    }
  },
  voteProgrammeReview: async (param: IVoteReq) => {
    const { value, id } = param
    try {
      await axios.post(`${DEFAULT_BASE_URL}/program-reviews/${id}/votes`, {
        value
      })
    } catch (error) {
      throw error
    }
  }
}

export { apiService }
