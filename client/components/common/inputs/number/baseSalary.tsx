import { InputAdornment } from "@mui/material"
import React from "react"
import BaseNumberInput, { IBaseNumberInputProps } from "."

interface IBaseSalaryNumberInputProps extends IBaseNumberInputProps {}

const BaseSalaryNumberInput: React.FunctionComponent<
  IBaseSalaryNumberInputProps
> = ({ ...props }) => {
  return (
    <BaseNumberInput
      id="baseSalary"
      label="基本薪金"
      name="baseSalary"
      inputProps={{
        min: 0,
        step: 1
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">HKD</InputAdornment>
      }}
      {...props}
    />
  )
}

export default BaseSalaryNumberInput
