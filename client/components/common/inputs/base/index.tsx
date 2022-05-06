import {
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React from "react";

export type IBaseInputProps = TextFieldProps;

const BaseInput: React.FunctionComponent<IBaseInputProps> = ({ ...props }) => {
  return <TextField {...props} />;
};

export default BaseInput;
