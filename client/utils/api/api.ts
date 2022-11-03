import axios from "axios"
import { ICreateSchoolReviewRes } from "../../types/api"
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

  createSchoolReview: async (body: ICreateSchoolReviewRes) => {
    // const body: ICreateSchoolReviewRes = {
    //   schoolId: 0,
    //   title: "string",
    //   academicStatusId: 0,
    //   admissionDate: ,
    //   contactMethod: {
    //     typeId: 0,
    //     value: "string"
    //   },
    //   ratingQuestionResponses: [
    //     {
    //       questionId: 0,
    //       optionId: 0
    //     }
    //   ],
    //   longQuestionResponses: [
    //     {
    //       questionId: 0,
    //       text: "string"
    //     }
    //   ],
    //   userId: 0,
    //   anonymous: true
    // }
    const res = await axios.post(`${DEFAULT_BASE_URL}/school-reviews`, {
      body
    })

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
