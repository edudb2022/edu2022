import { InputAdornment } from "@mui/material"
import React from "react"
import BaseNumberInput, { IBaseNumberInputProps } from "."

interface IBonusNumberInputProps extends IBaseNumberInputProps {}

const BonusNumberInput: React.FunctionComponent<IBonusNumberInputProps> = ({
  ...props
}) => {
  return (
    <BaseNumberInput
      id="bonus"
      label="花紅"
      name="bonus"
      InputProps={{
        startAdornment: <InputAdornment position="start">HKD</InputAdornment>
      }}
      {...props}
    />
  )
}

export default BonusNumberInput
