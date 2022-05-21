import { InputAdornment } from "@mui/material";
import React from "react";
import BaseNumberInput, { IBaseNumberInputProps } from ".";

interface IBonusNumberInputProps extends IBaseNumberInputProps {}

const BonusNumberInput: React.FunctionComponent<
  IBonusNumberInputProps
> = () => {
  return (
    <BaseNumberInput
      variant="outlined"
      label="花紅"
      InputProps={{
        startAdornment: <InputAdornment position="start">HKD</InputAdornment>,
      }}
    />
  );
};

export default BonusNumberInput;
