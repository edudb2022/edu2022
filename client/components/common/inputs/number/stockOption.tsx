import { InputAdornment } from "@mui/material";
import React from "react";
import BaseNumberInput, { IBaseNumberInputProps } from ".";

interface IStockOptionNumberInputProps extends IBaseNumberInputProps {}

const StockOptionNumberInput: React.FunctionComponent<
  IStockOptionNumberInputProps
> = () => {
  return (
    <BaseNumberInput
      variant="outlined"
      label="股票/股票期权"
      InputProps={{
        startAdornment: <InputAdornment position="start">HKD</InputAdornment>,
      }}
    />
  );
};

export default StockOptionNumberInput;
