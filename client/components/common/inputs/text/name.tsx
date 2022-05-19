import React from "react";
import BaseTextInput, { IBaseInputTextProps } from ".";

type INameInput = IBaseInputTextProps & { className?: string };

const NameTextInput: React.FunctionComponent<INameInput> = ({
  className,
  ...props
}) => {
  return (
    <BaseTextInput
      name="username"
      label="用戶名稱"
      className={`${className}`}
      {...props}
    />
  );
};

export default NameTextInput;
