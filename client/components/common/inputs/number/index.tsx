import React from "react";
import BaseTextInput, { IBaseInputTextProps } from "../text";

type IBaseNumberInputProps = IBaseInputTextProps & {
  className?: string;
};

const BaseNumberInput: React.FunctionComponent<IBaseNumberInputProps> = ({
  ...props
}) => {
  return <BaseTextInput type={"number"} {...props} />;
};

export default BaseNumberInput;
