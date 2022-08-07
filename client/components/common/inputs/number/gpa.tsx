import React from "react"
import BaseNumberInput, { IBaseNumberInputProps } from "."

interface IGpaNumberInputProps extends IBaseNumberInputProps {}

const GpaNumberInput: React.FunctionComponent<IGpaNumberInputProps> = ({
  ...props
}) => {
  return (
    <BaseNumberInput
      name="gpa"
      id="gpa"
      label="GPA"
      inputProps={{ min: 0 }}
      {...props}
    />
  )
}

export default GpaNumberInput
