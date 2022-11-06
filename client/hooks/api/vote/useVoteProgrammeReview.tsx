import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useVoteProgrammeReview = () => {
  return useMutation(apiService.voteProgrammeReview)
}

export default useVoteProgrammeReview
