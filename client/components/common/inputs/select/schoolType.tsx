import { FormControl, InputLabel } from "@mui/material"
import React from "react"
import BaseSelect, { IBaseSelectProps } from "."
import { SCHOOL_TYPE } from "../../../../types/common"

interface ISchoolTypeSelectPorps extends Partial<IBaseSelectProps> {}

const SchoolTypeSelect: React.FunctionComponent<ISchoolTypeSelectPorps> = ({
  selectValue,
  isTouched,
  errorMessages,
  ...props
}) => {
  const options = [
    // {
    //   value: "None",
    //   title: "select school type"
    // },

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
      items={options}
      isTouched={isTouched}
      errorMessages={errorMessages}
      selectValue={selectValue!}
      {...props}
    />
  )
}

export default SchoolTypeSelect
