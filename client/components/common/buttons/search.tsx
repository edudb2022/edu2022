import React from "react"
import BaseButton, { IBaseButtonProps } from "."
import SearchIcon from "../icons/search"

interface ISearchButtonProps extends IBaseButtonProps {}

const SearchButton: React.FunctionComponent<ISearchButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton className=" md:px-4 md:py-2  " {...props}>
      <SearchIcon />
    </BaseButton>
  )
}

export default SearchButton
