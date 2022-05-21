import { InputAdornment } from "@mui/material";
import React from "react";
import BaseNumberInput, { IBaseNumberInputProps } from ".";

interface IBaseSalaryNumberInputProps extends IBaseNumberInputProps {}

const BaseSalaryNumberInput: React.FunctionComponent<
  IBaseSalaryNumberInputProps
> = () => {
  return (
    <BaseNumberInput
      variant="outlined"
      label="基本薪金"
      inputProps={{ min: "0", step: "1" }}
      InputProps={{
        startAdornment: <InputAdornment position="start">HKD</InputAdornment>,
      }}
    />
  );
};

export default BaseSalaryNumberInput;
