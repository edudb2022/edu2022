import {
  FilledTextFieldProps,
  StandardTextFieldProps,
  TextField
} from "@mui/material"
import React from "react"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import { styled } from "@mui/material/styles"

export type IBaseInputTextProps = Partial<FilledTextFieldProps> &
  Partial<StandardTextFieldProps> &
  IInputContainerProps & {
    isRequired?: boolean
    maxLength?: number | null
    valueLength?: number | null
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
  maxLength,
  valueLength,
  ...props
}) => {
  const inputLable = label ? `${label}${isRequired ? "*" : ""}` : undefined
  const length = valueLength || 0

  return (
    <InputContainer
      errorMessages={errorMessages}
      inputContainerClassName={inputContainerClassName}
      header={header}
      headerRequired={headerRequired}
      isTouched={isTouched}
      helpText={helpText}
    >
      <div className="relative">
        <TextField
          className={`${className}`}
          label={inputLable}
          sx={{
            "& label.Mui-focused": {
              color: "#F2994A"
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#F2994A"
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F2994A"
              }
            }
          }}
          fullWidth
          {...props}
        />
        {maxLength && (
          <div className="absolute right-3 top-7 text-theme-three-500">
            {`${length}/${maxLength}`}
          </div>
        )}
      </div>
    </InputContainer>
  )
}

export default BaseTextInput
