import { SelectChangeEvent } from "@mui/material"
import React from "react"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import {
  applicationTypesList,
  interviewSortingTypesList
} from "../../../../constants/common"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IInterviewFilterActionTypes } from "../../../../state/filters/interview/actions"
import BaseFilterContainer from "../../../containers/filters"
import BaseSelect from "../../inputs/select"

const InterviewFilterInputGroup: React.FunctionComponent = () => {
  const { sorting, admissionType } = useAppSelector(
    (state) => state.filter.interview
  )
  const dispatch = useAppDispatch()
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target

    if (name === "sorting") {
      dispatch({
        type: IInterviewFilterActionTypes.SET_SORTING,
        payload: value
      })
    }
    if (name === "admissionType") {
      dispatch({
        type: IInterviewFilterActionTypes.SET_ADMISSION_TYPE,
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
        items={interviewSortingTypesList}
        inputLabel="sorting"
      />

      <BaseSelect
        name="admissionType"
        onChange={handleChange}
        selectValue={admissionType}
        items={applicationTypesList}
        inputLabel="admissionType"
      />
    </BaseFilterContainer>
  )
}

export default InterviewFilterInputGroup
