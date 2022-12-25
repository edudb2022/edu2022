import { useQuery } from "react-query"
import { IGetInterviewDetailReviewRes } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetInterviewDetailReview = (id: string) => {
  return useQuery<IGetInterviewDetailReviewRes, Error>(
    ["interview-detail-review", { id }],
    apiService.getInterviewDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetInterviewDetailReview
