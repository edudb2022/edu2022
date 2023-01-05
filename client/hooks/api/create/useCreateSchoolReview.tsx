import { useMutation } from "react-query"
import { apiService } from "../../../utils/api/api"

const useCreateSchoolReview = () => {
  return useMutation(apiService.createSchoolReview)
}

export default useCreateSchoolReview
