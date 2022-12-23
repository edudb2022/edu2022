import { FormControl, InputLabel } from "@mui/material"
import React from "react"
import BaseSelect, { IBaseSelectProps } from "."
import { schoolTypesList } from "../../../../constants/common"
import { SCHOOL_TYPE } from "../../../../types/common"

interface ISchoolTypeSelectPorps extends Partial<IBaseSelectProps> {}

const SchoolTypeSelect: React.FunctionComponent<ISchoolTypeSelectPorps> = ({
  selectValue,
  isTouched,
  errorMessages,
  ...props
}) => {
  const options = [
    {
      value: SCHOOL_TYPE.COLLEGE,
      title: SCHOOL_TYPE.COLLEGE
    },
    {
      value: SCHOOL_TYPE.UNIVERSITY,
      title: SCHOOL_TYPE.UNIVERSITY
    }
  ]
  return (
    <BaseSelect
      name="schoolType"
      items={schoolTypesList}
      isTouched={isTouched}
      errorMessages={errorMessages}
      selectValue={selectValue!}
      {...props}
    />
  )
}

export default SchoolTypeSelect
