import Error from "next/error"
import React from "react"
import { useQuery } from "react-query"
import { GetSchoolRes } from "../../types/api"
import { apiService } from "../../utils/api/api"

const useGetSchools = () => {
  return useQuery<GetSchoolRes[]>(["schools"], apiService.getSchools, {
    refetchOnWindowFocus: false
  })
}

export default useGetSchools
