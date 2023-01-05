import { useQuery } from "react-query"
import { IGetAdmissionOfferDetailReviewRes } from "../../../types/api"
import { apiService } from "../../../utils/api/api"

const useGetAdmissionOfferReview = (id: string) => {
  return useQuery<IGetAdmissionOfferDetailReviewRes, Error>(
    ["admission-offer-detail-review", { id }],
    apiService.getAdmissionOfferDetailReview,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetAdmissionOfferReview
