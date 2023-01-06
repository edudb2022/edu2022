import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVotePInterviewReview = () => {
  return useMutation(apiService.voteInterviewReview)
}

export default useVotePInterviewReview
