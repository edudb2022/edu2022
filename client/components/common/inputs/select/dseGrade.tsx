import React from "react"
import BaseSelect, { IBaseSelectProps } from "."
import { dseScore } from "../../../../constants/admission"
import { DSEGradeTypesList } from "../../../../constants/common"

interface IDseGradeSelectProps extends Partial<IBaseSelectProps> {}

const DseGradeSelect: React.FunctionComponent<IDseGradeSelectProps> = ({
  selectValue,
  isTouched,
  errorMessages,
  ...props
}) => {
  return (
    <BaseSelect
      inputLabel="成績"
      isTouched={isTouched}
      errorMessages={errorMessages}
      items={DSEGradeTypesList}
      selectValue={selectValue!}
      {...props}
    />
  )
}

export default DseGradeSelect
