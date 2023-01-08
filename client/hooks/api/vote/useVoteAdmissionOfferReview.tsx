import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVoteAdmissionOfferReview = () => {
  return useMutation(apiService.voteAdmissionOfferReview)
}

export default useVoteAdmissionOfferReview
