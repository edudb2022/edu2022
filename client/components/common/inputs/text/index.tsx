import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldProps
} from "@mui/material"
import React from "react"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

export type IBaseInputTextProps = Partial<FilledTextFieldProps> &
  Partial<StandardTextFieldProps> &
  IInputContainerProps & {
    isRequired?: boolean
  }

const BaseTextInput: React.FunctionComponent<IBaseInputTextProps> = ({
  isTouched,
  errorMessages,
  className,
  inputContainerClassName,
  header,
  headerRequired,
  isRequired,
  label,
  helpText,
  ...props
}) => {
  return (
    <InputContainer
      errorMessages={errorMessages}
      inputContainerClassName={inputContainerClassName}
      header={header}
      headerRequired={headerRequired}
      isTouched={isTouched}
      helpText={helpText}
    >
      <TextField
        className={`${className}`}
        label={`${label}${isRequired ? "*" : ""}`}
        {...props}
      />
    </InputContainer>
  )
}

export default BaseTextInput
