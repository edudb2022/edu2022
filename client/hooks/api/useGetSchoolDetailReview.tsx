import React from "react"
import { useQuery } from "react-query"
import { IGetSchoolDetailReviewRes } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetSchoolDetailReview = (id: string) => {
  return useQuery<IGetSchoolDetailReviewRes, Error>(
    ["school-detail-review", { id }],
    apiService.getSchoolDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetSchoolDetailReview
