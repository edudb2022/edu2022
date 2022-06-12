import { OutlinedTextFieldProps, TextField } from "@mui/material"
import React from "react"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

export type IBaseInputTextProps = OutlinedTextFieldProps & IErrorMessageProps

const BaseTextInput: React.FunctionComponent<IBaseInputTextProps> = ({
  isTouched,
  errorMessages,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <TextField {...props} />

      <div className="flex justify-end">
        <ErrorMessage isTouched={isTouched} errorMessages={errorMessages} />
      </div>
    </div>
  )
}

export default BaseTextInput
