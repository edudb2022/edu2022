import React from "react"
import BaseButton, { IBaseButtonProps } from "."

interface ISearchButtonProps extends IBaseButtonProps {}

const SearchButton: React.FunctionComponent<ISearchButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton className="border-2" {...props}>
      Search
    </BaseButton>
  )
}

export default SearchButton
