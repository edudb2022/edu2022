import { InputAdornment } from "@mui/material"
import React from "react"
import BaseNumberInput, { IBaseNumberInputProps } from "."

interface IStockOptionNumberInputProps extends IBaseNumberInputProps {}

const StockOptionNumberInput: React.FunctionComponent<
  IStockOptionNumberInputProps
> = ({ ...props }) => {
  return (
    <BaseNumberInput
      id="stockOption"
      label="股票/股票期权"
      name="stockOption"
      InputProps={{
        startAdornment: <InputAdornment position="start">HKD</InputAdornment>
      }}
      {...props}
    />
  )
}

export default StockOptionNumberInput
