import { useQuery } from "react-query"
import { IGetSchoolRes } from "../../../types/api"
import { apiService } from "../../../utils/api/api"

const useGetSchools = () => {
  return useQuery<IGetSchoolRes[]>(["schools"], apiService.getSchools, {
    refetchOnWindowFocus: false
  })
}

export default useGetSchools
