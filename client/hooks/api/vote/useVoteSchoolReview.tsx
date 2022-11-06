import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVoteSchoolReview = () => {
  return useMutation(apiService.voteSchoolReview)
}

export default useVoteSchoolReview
