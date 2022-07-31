import { SelectChangeEvent } from "@mui/material"
import React from "react"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { jobSourceOptions } from "../../../../constants/common"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IAdmissionFilterActionTypes } from "../../../../state/filters/admission/actions"
import { IInterviewFilterActionTypes } from "../../../../state/filters/interview/actions"
import BaseFilterContainer from "../../../containers/filters"
import BaseSelect from "../../inputs/select"

const InterviewFilterInputGroup: React.FunctionComponent = () => {
  const { sorting, admissionType, scoreSorting } = useAppSelector(
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

    if (name === "scoreSorting") {
      dispatch({
        type: IInterviewFilterActionTypes.SET_SCORE_SORTING,
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
        items={jobSourceOptions}
        inputLabel="sorting"
      />
      <BaseSelect
        name="scoreSorting"
        onChange={handleChange}
        selectValue={scoreSorting}
        items={jobSourceOptions}
        inputLabel="scoreSorting"
      />
      <BaseSelect
        name="admissionType"
        onChange={handleChange}
        selectValue={admissionType}
        items={jobSourceOptions}
        inputLabel="admissionType"
      />
    </BaseFilterContainer>
  )
}

export default InterviewFilterInputGroup
