import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useCreateInterviewReview = () => {
  return useMutation(apiService.createInterviewReview)
}

export default useCreateInterviewReview
