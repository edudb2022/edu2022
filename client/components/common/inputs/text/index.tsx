import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldProps
} from "@mui/material"
import React from "react"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

export type IBaseInputTextProps = Partial<FilledTextFieldProps> &
  Partial<StandardTextFieldProps> &
  IErrorMessageProps

const BaseTextInput: React.FunctionComponent<IBaseInputTextProps> = ({
  isTouched,
  errorMessages,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <TextField className={`bg-[#F8FAFC]  ${className}`} {...props} />

      <div className="flex justify-end">
        <ErrorMessage isTouched={isTouched} errorMessages={errorMessages} />
      </div>
    </div>
  )
}

export default BaseTextInput
