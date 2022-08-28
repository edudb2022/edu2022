import { SelectChangeEvent } from "@mui/material"
import React from "react"

import {
  admissionOfferTypesList,
  gradJobOfferSortingTypesList,
  jobSourceOptions
} from "../../../../constants/common"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IGradJobFilterActionTypes } from "../../../../state/filters/gradJob/actions"

import BaseFilterContainer from "../../../containers/filters"
import BaseSelect from "../../inputs/select"

const GradJobFilterInputGroup: React.FunctionComponent = () => {
  const { sorting, industry } = useAppSelector((state) => state.filter.gradJob)
  const dispatch = useAppDispatch()
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target

    if (name === "sorting") {
      dispatch({
        type: IGradJobFilterActionTypes.SET_SORTING,
        payload: value
      })
    }

    if (name === "industry") {
      dispatch({
        type: IGradJobFilterActionTypes.SET_INDUESTY,
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
        items={gradJobOfferSortingTypesList}
        inputLabel="排序"
      />

      <BaseSelect
        name="industry"
        onChange={handleChange}
        selectValue={industry}
        items={admissionOfferTypesList}
        inputLabel="行業"
      />
    </BaseFilterContainer>
  )
}

export default GradJobFilterInputGroup
