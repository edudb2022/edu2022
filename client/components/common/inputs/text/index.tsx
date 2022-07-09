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
  IInputContainerProps

const BaseTextInput: React.FunctionComponent<IBaseInputTextProps> = ({
  isTouched,
  errorMessages,
  className,
  inputContainerClassName,
  header,
  headerRequired,
  ...props
}) => {
  return (
    <InputContainer
      errorMessages={errorMessages}
      inputContainerClassName={inputContainerClassName}
      header={header}
      headerRequired={headerRequired}
      isTouched={isTouched}
    >
      <TextField
        className={`ring-red-500 outline-red-500 bg-[#F8FAFC]  ${className}`}
        {...props}
      />
    </InputContainer>
  )
}

export default BaseTextInput
