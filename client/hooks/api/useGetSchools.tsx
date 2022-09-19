import Error from "next/error"
import React from "react"
import { useQuery } from "react-query"
import { GetSchoolRes } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetSchools = () => {
  //   const res = useQuery(apiService.getSchools)
  return useQuery<GetSchoolRes[]>(["schools"], apiService.getSchools)
}

export default useGetSchools
