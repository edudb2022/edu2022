import { useMutation } from "react-query"

import { apiService } from "../../utils/api/api"

const useCreateInternshipReview = () => {
  return useMutation(apiService.createInternshipReview)
}

export default useCreateInternshipReview
