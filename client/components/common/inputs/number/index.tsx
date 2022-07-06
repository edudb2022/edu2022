import React from "react"
import BaseTextInput, { IBaseInputTextProps } from "../text"

export interface IBaseNumberInputProps extends IBaseInputTextProps {}

const BaseNumberInput: React.FunctionComponent<IBaseNumberInputProps> = ({
  ...props
}) => {
  return (
    <>
      <BaseTextInput type={"number"} {...props} />
    </>
  )
}

export default BaseNumberInput
