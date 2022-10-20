import { SelectChangeEvent } from "@mui/material"
import React from "react"

import { schoolSortingTypesList } from "../../../../constants/common"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"

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
        items={schoolSortingTypesList}
        inputLabel="排序"
      />
    </BaseFilterContainer>
  )
}

export default SchoolFilterInputGroup
