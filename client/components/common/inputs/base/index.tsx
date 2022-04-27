import { Input, InputBase, InputProps } from "@mui/material";
import React from "react";

export type IBaseInputProps = InputProps;

const BaseInput: React.FunctionComponent<IBaseInputProps> = ({ ...props }) => {
  return <Input {...props} />;
};

export default BaseInput;
