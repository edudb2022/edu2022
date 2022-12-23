import React from "react"
import BaseNumberInput, { IBaseNumberInputProps } from "."

interface IGpaNumberInputProps extends IBaseNumberInputProps {}

const GpaNumberInput: React.FunctionComponent<IGpaNumberInputProps> = ({
  ...props
}) => {
  return <BaseNumberInput name="gpa" id="gpa" label="GPA" {...props} />
}

export default GpaNumberInput
