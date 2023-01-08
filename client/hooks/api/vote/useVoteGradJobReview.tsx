import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVoteGradJobReview = () => {
  return useMutation(apiService.voteGradJobOfferReview)
}

export default useVoteGradJobReview
