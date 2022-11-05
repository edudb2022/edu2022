import { useMutation } from "react-query"

import { apiService } from "../../utils/api/api"

const useCreateProgrammeReview = () => {
  return useMutation(apiService.createProgrammeReview)
}

export default useCreateProgrammeReview
