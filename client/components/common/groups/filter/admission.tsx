import { SelectChangeEvent } from "@mui/material"
import React from "react"

import {
  admissionLevelTypesList,
  admissionOfferSortingTypesList,
  admissionOfferTypesList,
  applicationTypesList,
  yearOfStudyTypesList
} from "../../../../constants/common"
import { useAppDispatch } from "../../../../hooks/common/useAppDispatch"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IAdmissionFilterActionTypes } from "../../../../state/filters/admission/actions"
import BaseFilterContainer from "../../../containers/filters"
import BaseSelect from "../../inputs/select"

const AdmissionFilterInputGroup: React.FunctionComponent = () => {
  const { sorting, offerType, admissionType, admissionLevel, yearOfStudy } =
    useAppSelector((state) => state.filter.admission)
  const dispatch = useAppDispatch()
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target

    if (name === "sorting") {
      dispatch({
        type: IAdmissionFilterActionTypes.SET_SORTING,
        payload: value
      })
    }
    if (name === "offerType") {
      dispatch({
        type: IAdmissionFilterActionTypes.SET_OFFER_TYPE,
        payload: value
      })
    }

    if (name === "admissionType") {
      dispatch({
        type: IAdmissionFilterActionTypes.SET_ADMISSION_TYPE,
        payload: value
      })
    }

    if (name === "admissionLevel") {
      dispatch({
        type: IAdmissionFilterActionTypes.SET_ADMISSION_LEVEL,
        payload: value
      })
    }

    if (name === "yearOfStudy") {
      dispatch({
        type: IAdmissionFilterActionTypes.SET_YEAT_OF_STUDY,
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
        items={admissionOfferSortingTypesList}
        inputLabel="排序"
      />
      <BaseSelect
        name="offerType"
        onChange={handleChange}
        selectValue={offerType}
        items={admissionOfferTypesList}
        inputLabel="offer類型"
      />
      <BaseSelect
        name="admissionType"
        onChange={handleChange}
        selectValue={admissionType}
        items={applicationTypesList}
        inputLabel="入學類型"
      />

      <BaseSelect
        name="admissionLevel"
        onChange={handleChange}
        selectValue={admissionLevel}
        items={admissionLevelTypesList}
        inputLabel="入學年級"
      />

      <BaseSelect
        name="yearOfStudy"
        onChange={handleChange}
        selectValue={yearOfStudy}
        items={yearOfStudyTypesList}
        inputLabel="現時學業年級"
      />
    </BaseFilterContainer>
  )
}

export default AdmissionFilterInputGroup
