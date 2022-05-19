import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export type IBaseInputTextProps = TextFieldProps;

const BaseTextInput: React.FunctionComponent<IBaseInputTextProps> = ({
  ...props
}) => {
  return <TextField {...props} />;
};

export default BaseTextInput;
