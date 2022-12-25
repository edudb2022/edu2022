import React from "react"
import { useQuery } from "react-query"
import { IGetSchoolDetailReviewRes } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetProgrammeDetailReview = (id: string) => {
  return useQuery<IGetSchoolDetailReviewRes, Error>(
    ["programme-detail-review", { id }],
    apiService.getProgrammeDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetProgrammeDetailReview
