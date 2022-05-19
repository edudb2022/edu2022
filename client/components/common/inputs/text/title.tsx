import React from "react";
import BaseTextInput from ".";
import { IBaseInputTextProps } from ".";

type ITitleTextInputProps = IBaseInputTextProps & {
  className?: string;
};

const TitleTextInput: React.FunctionComponent<ITitleTextInputProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseTextInput
      name="title"
      className={`${className}`}
      label="標題"
      {...props}
    />
  );
};

export default TitleTextInput;
