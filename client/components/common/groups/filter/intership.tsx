import { SelectChangeEvent } from "@mui/material"
import React from "react"

import {
  admissionOfferTypesList,
  internshipTypesList,
  intershipOfferSortingTypesList,
  jobSourceOptions
} from "../../../../constants/common"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IIntershipFilterActionTypes } from "../../../../state/filters/intership/actions"
import { InternshipOfferSortingTypes } from "../../../../types/common"

import BaseFilterContainer from "../../../containers/filters"
import BaseSelect from "../../inputs/select"

const InternshipFilterInputGroup: React.FunctionComponent = () => {
  const { sorting, industry, internshipType } = useAppSelector(
    (state) => state.filter.internship
  )
  const dispatch = useAppDispatch()
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target

    if (name === "sorting") {
      dispatch({
        type: IIntershipFilterActionTypes.SET_SORTING,
        payload: value
      })
    }
    if (name === "intershipType") {
      dispatch({
        type: IIntershipFilterActionTypes.SET_INTERSHIP_TYPE,
        payload: value
      })
    }

    if (name === "industry") {
      dispatch({
        type: IIntershipFilterActionTypes.SET_INDUESTY,
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
        items={intershipOfferSortingTypesList}
        inputLabel="sorting"
      />
      <BaseSelect
        name="intershipType"
        onChange={handleChange}
        selectValue={internshipType}
        items={internshipTypesList}
        inputLabel="internshipType"
      />
      <BaseSelect
        name="industry"
        onChange={handleChange}
        selectValue={industry}
        items={internshipTypesList}
        inputLabel="industry"
      />
    </BaseFilterContainer>
  )
}

export default InternshipFilterInputGroup
