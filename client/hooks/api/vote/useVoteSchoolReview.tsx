import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVoteSchoolReview = () => {
  return useMutation(apiService.voteProgrammeReview)
}

export default useVoteSchoolReview
