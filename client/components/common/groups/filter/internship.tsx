import { SelectChangeEvent } from "@mui/material"
import React from "react"

import {
  internshipTypesList,
  internshipOfferSortingTypesList
} from "../../../../constants/common"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IInternshipFilterActionTypes } from "../../../../state/filters/internship/actions"
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
        type: IInternshipFilterActionTypes.SET_SORTING,
        payload: value
      })
    }
    if (name === "intershipType") {
      dispatch({
        type: IInternshipFilterActionTypes.SET_INTERSHIP_TYPE,
        payload: value
      })
    }

    if (name === "industry") {
      dispatch({
        type: IInternshipFilterActionTypes.SET_INDUESTY,
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
        items={internshipOfferSortingTypesList}
        inputLabel="排序"
      />
      <BaseSelect
        name="intershipType"
        onChange={handleChange}
        selectValue={internshipType}
        items={internshipTypesList}
        inputLabel="實習類型"
      />
      <BaseSelect
        name="industry"
        onChange={handleChange}
        selectValue={industry}
        items={internshipTypesList}
        inputLabel="工作類型"
      />
    </BaseFilterContainer>
  )
}

export default InternshipFilterInputGroup
