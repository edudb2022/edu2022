import React from "react"
import BaseSelect, { IBaseSelectProps } from "."
import { dseScore } from "../../../../constants/admission"

interface IDseGradeSelectProps extends Partial<IBaseSelectProps> {}

const DseGradeSelect: React.FunctionComponent<IDseGradeSelectProps> = ({
  selectValue,
  isTouched,
  errorMessages,
  ...props
}) => {
  return (
    <BaseSelect
      inputLabel="Grade"
      isTouched={isTouched}
      errorMessages={errorMessages}
      items={dseScore}
      selectValue={selectValue!}
      {...props}
    />
  )
}

export default DseGradeSelect
