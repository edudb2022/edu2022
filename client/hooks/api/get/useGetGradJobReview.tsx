import { useQuery } from "react-query"
import { IGetGradJobDetailReviewRes } from "../../../types/api"
import { apiService } from "../../../utils/api/api"

const useGetGradJobDetailReview = (id: string) => {
  return useQuery<IGetGradJobDetailReviewRes, Error>(
    ["gradJob-detail-review", { id }],
    apiService.getGradJobDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetGradJobDetailReview
