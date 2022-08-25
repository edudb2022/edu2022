import { SelectChangeEvent } from "@mui/material"
import React from "react"

import {
  internshipTypesList,
  jobSourceOptions,
  SchoolSortingTypesList,
  schoolTypesList
} from "../../../../constants/common"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IInterviewFilterActionTypes } from "../../../../state/filters/interview/actions"
import { IProgrammeFilterActionTypes } from "../../../../state/filters/programme/actions"
import { ISchoolFilterActionTypes } from "../../../../state/filters/school/actions"
import BaseFilterContainer from "../../../containers/filters"
import BaseSelect from "../../inputs/select"

const SchoolFilterInputGroup: React.FunctionComponent = () => {
  const { sorting } = useAppSelector((state) => state.filter.school)
  const dispatch = useAppDispatch()
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target

    if (name === "sorting") {
      dispatch({
        type: ISchoolFilterActionTypes.SET_SORTING,
        payload: value
      })
    }
  }

  return (
    <BaseFilterContainer>
      <BaseSelect
        name="sorting"
        onChange={handleChange}
        selectValue={sorting}
        items={SchoolSortingTypesList}
        inputLabel="sorting"
      />
    </BaseFilterContainer>
  )
}

export default SchoolFilterInputGroup
