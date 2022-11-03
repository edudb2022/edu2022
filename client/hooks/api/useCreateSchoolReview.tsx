import React from "react"
import { useMutation, useQuery } from "react-query"
import { ICreateSchoolReviewRes, IGetSchoolDetailReivew } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useCreateSchoolReview = () => {
  return useMutation(apiService.createSchoolReview)
}

export default useCreateSchoolReview

// import React from "react"

// const useGetSchoolDetailReivew = (id: string) => {
//   return useQuery<IGetSchoolDetailReivew, Error>(
//     ["school-detail-review", { id }],
//     apiService.getSchoolDetailReivew,
//     {
//       refetchOnWindowFocus: false
//     }
//   )
// }

// export default useGetSchoolDetailReivew
