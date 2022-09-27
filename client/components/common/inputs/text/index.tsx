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
  // const CssTextField = styled(TextField)({
  //   "& label.Mui-focused": {
  //     color: "#F2994A"
  //   },
  //   "& .MuiInput-underline:after": {
  //     borderBottomColor: "#F2994A"
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "#F2994A"
  //     },
  //     "&:hover fieldset": {
  //       borderColor: "#F2994A"
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "#F2994A"
  //     }
  //   }
  // })

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
