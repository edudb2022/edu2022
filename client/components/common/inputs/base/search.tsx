import React from "react";
import BaseInput, { IBaseInputProps } from ".";

type ISearchInputProps = IBaseInputProps & {
  className?: string;
};

const SearchInput: React.FunctionComponent<ISearchInputProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseInput
      name="search"
      className="w-10/12"
      placeholder="輸入學校中文或英文名稱"
      {...props}
    />
  );
};

export default SearchInput;
