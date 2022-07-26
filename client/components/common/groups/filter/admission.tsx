import { SelectChangeEvent } from "@mui/material"
import React from "react"
import { useDispatch } from "react-redux"
import { jobSourceOptions } from "../../../../constants/common"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { IAdmissionFilterActionTypes } from "../../../../state/filters/admission/reducer"
import BaseSelect from "../../inputs/select"

const AdmissionFilterGroup: React.FunctionComponent = () => {
  const { sorting, offerType, admissionType, admissionLevel, yearOfStudy } =
    useAppSelector((state) => state.filter.admission)
  const dispatch = useDispatch()
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
    <div className="flex flex-col p-2 ">
      <BaseSelect
        name="sorting"
        onChange={handleChange}
        selectValue={sorting}
        items={jobSourceOptions}
      />
      <BaseSelect
        name="offerType"
        onChange={handleChange}
        selectValue={offerType}
        items={jobSourceOptions}
      />
      <BaseSelect
        name="admissionType"
        onChange={handleChange}
        selectValue={admissionType}
        items={jobSourceOptions}
      />

      <BaseSelect
        name="admissionLevel"
        onChange={handleChange}
        selectValue={admissionLevel}
        items={jobSourceOptions}
      />

      <BaseSelect
        name="yearOfStudy"
        onChange={handleChange}
        selectValue={yearOfStudy}
        items={jobSourceOptions}
      />
    </div>
  )
}

export default AdmissionFilterGroup
