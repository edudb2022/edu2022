import React from "react";
import BaseInput, { IBaseInputProps } from ".";

interface ISearchInputProps extends IBaseInputProps {
  className?: string;
}

const SearchInput: React.FunctionComponent<ISearchInputProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseInput
      name="search"
      className="w-full"
      placeholder="輸入學校中文或英文名稱"
      {...props}
    />
  );
};

export default SearchInput;
