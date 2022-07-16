import React from "react"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import BaseTextInput, { IBaseInputTextProps } from "../text"

export interface IBaseNumberInputProps
  extends IBaseInputTextProps,
    IInputContainerProps {
  isRequired?: boolean
}

const BaseNumberInput: React.FunctionComponent<IBaseNumberInputProps> = ({
  errorMessages,
  headerClassName,
  headerRequired,
  subHeader,
  isTouched,
  subHeaderClassName,
  inputContainerClassName,
  name,
  label,
  isRequired,
  ...props
}) => {
  return (
    <InputContainer
      errorMessages={errorMessages}
      headerClassName={headerClassName}
      headerRequired={headerRequired}
      subHeader={subHeader}
      isTouched={isTouched}
      subHeaderClassName={subHeaderClassName}
      inputContainerClassName={inputContainerClassName}
    >
      <BaseTextInput
        type={"number"}
        label={`${label}${isRequired ? "*" : ""}`}
        {...props}
      />
    </InputContainer>
  )
}

export default BaseNumberInput
