import { TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

interface IBaseDatePickerProps {
  value: string;
  onChange: (value: any, keyboardInputValue?: string) => void;
  label: string;
}

const BaseDatePicker: React.FunctionComponent<IBaseDatePickerProps> = ({
  value,
  onChange,
  label,
  ...props
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label={label}
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
          {...props}
        />
      </LocalizationProvider>
    </>
  );
};

export default BaseDatePicker;
