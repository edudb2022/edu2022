import { SelectProps } from "@mui/material"
import React from "react"
import BaseSelect from "."
import { CategoryA } from "../../../../constants/admission"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

interface IDseSubjectsSelectProps extends SelectProps, IErrorMessageProps {
  selecClassName?: string
  selectValue: string | null
  selectId?: string
  itemsClassName?: string
  inputLabelClassName?: string
  inputLabel?: string
}

const DseSubjectsSelect: React.FunctionComponent<IDseSubjectsSelectProps> = ({
  selectValue,
  selecClassName,
  selectId,

  errorMessages,
  isTouched,
  itemsClassName,
  inputLabelClassName,
  inputLabel,
  ...props
}) => {
  return (
    <BaseSelect
      inputLabel={inputLabel}
      isTouched={isTouched}
      errorMessages={errorMessages}
      items={CategoryA}
      selectValue={selectValue!}
      {...props}
    />
  )
}

export default DseSubjectsSelect
