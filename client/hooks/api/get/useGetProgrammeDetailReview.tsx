import { useQuery } from "react-query"
import { IGetProgrammeDetailReviewRes } from "../../../types/api"
import { apiService } from "../../../utils/api/api"

const useGetProgrammeDetailReview = (id: string) => {
  return useQuery<IGetProgrammeDetailReviewRes, Error>(
    ["programme-detail-review", { id }],
    apiService.getProgrammeDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetProgrammeDetailReview
