import { OutlinedTextFieldProps, TextField } from "@mui/material";
import React from "react";

export type IBaseInputTextProps = OutlinedTextFieldProps;

const BaseTextInput: React.FunctionComponent<IBaseInputTextProps> = ({
  ...props
}) => {
  return <TextField {...props} />;
};

export default BaseTextInput;
