import React from "react"
import { useQuery } from "react-query"
import { IGetSchoolDetailReivew } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetSchoolDetailReivew = (id: string) => {
  return useQuery<IGetSchoolDetailReivew, Error>(
    ["school-detail-review", { id }],
    apiService.getSchoolDetailReivew,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetSchoolDetailReivew
