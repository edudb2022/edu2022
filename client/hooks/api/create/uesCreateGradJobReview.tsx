import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useCreateGradJobOfferReview = () => {
  return useMutation(apiService.createGradJobReview)
}

export default useCreateGradJobOfferReview
