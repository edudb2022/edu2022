import React from "react";
import BaseTextInput from ".";
import { IBaseInputTextProps } from ".";

type ISearchTextInputProps = IBaseInputTextProps & {
  className?: string;
};

const SearchTextInput: React.FunctionComponent<ISearchTextInputProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseTextInput
      name="search"
      className="w-10/12"
      placeholder="輸入學校中文或英文名稱"
      {...props}
    />
  );
};

export default SearchTextInput;
