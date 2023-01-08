import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVoteInterviewReview = () => {
  return useMutation(apiService.voteInternshipOfferReview)
}

useVoteInterviewReview
