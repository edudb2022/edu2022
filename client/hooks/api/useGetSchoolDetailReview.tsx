import { useQuery } from "react-query"
import { apiService } from "../../utils/api/api"

const useGetSchoolDetailReivew = ({ id }) => {
  return useQuery(
    [`school detail review id: ${id}`, { id }],
    apiService.getSchoolDetailReivew,
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useGetSchoolDetailReivew
