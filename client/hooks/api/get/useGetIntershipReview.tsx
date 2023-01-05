import { useQuery } from "react-query"
import { IGetInternshipDetailReviewRes } from "../../../types/api"
import { apiService } from "../../../utils/api/api"

const useGetInternshipDetailReview = (id: string) => {
  return useQuery<IGetInternshipDetailReviewRes, Error>(
    ["internship-detail-review", { id }],
    apiService.getInternshipDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetInternshipDetailReview
