import React, { MouseEventHandler, PropsWithChildren } from "react"
import BaseButton from "../../common/buttons"
import FormSumitButton from "../../common/buttons/formSubmit"

export interface IBaseFilterPorps {
  onClick: MouseEventHandler<HTMLButtonElement>
  onSearch: MouseEventHandler<HTMLButtonElement>
  isMobile?: boolean
}

const BaseFilter: React.FunctionComponent<
  PropsWithChildren<IBaseFilterPorps>
> = ({ children, onClick, onSearch, isMobile }) => {
  return (
    <div
      className={`flex flex-col items-center gap-y-2 w-full h-fit px-2 py-4 rounded-2xl ${
        !isMobile && "border-theme-one-100 hover:border-theme-one-500 border-2 "
      }`}
    >
      {children}
      <BaseButton onClick={onClick}> REset</BaseButton>
      {isMobile ? <></> : <FormSumitButton onClick={onSearch} />}
    </div>
  )
}

export default BaseFilter
