import React from "react"
import { useQuery } from "react-query"
import { GetSchoolDetailReivew } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetSchoolDetailReivew = (id: string) => {
  return useQuery<GetSchoolDetailReivew, Error>(
    ["school-detail-review", { id }],
    apiService.getSchoolDetailReivew,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetSchoolDetailReivew
