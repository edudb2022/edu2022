import React from "react"
import { useQuery } from "react-query"
import { IGetSchoolDetailReview } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetSchoolDetailReivew = (id: string) => {
  return useQuery<IGetSchoolDetailReview, Error>(
    ["school-detail-review", { id }],
    apiService.getSchoolDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetSchoolDetailReivew
