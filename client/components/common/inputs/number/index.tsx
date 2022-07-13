import React from "react"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import BaseTextInput, { IBaseInputTextProps } from "../text"

export interface IBaseNumberInputProps
  extends IBaseInputTextProps,
    IInputContainerProps {}

const BaseNumberInput: React.FunctionComponent<IBaseNumberInputProps> = ({
  errorMessages,
  headerClassName,
  headerRequired,
  subHeader,
  isTouched,
  subHeaderClassName,
  inputContainerClassName,
  name,
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
      <BaseTextInput type={"number"} {...props} />
    </InputContainer>
  )
}

export default BaseNumberInput
