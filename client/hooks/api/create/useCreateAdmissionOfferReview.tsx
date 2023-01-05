import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useCreateAdmissionOfferReview = () => {
  return useMutation(apiService.createAdmissionOfferReview)
}

export default useCreateAdmissionOfferReview
