import React, { MouseEventHandler, PropsWithChildren } from "react"
import BaseButton from "../../common/buttons"

export interface IBaseFilterProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  onSearch: MouseEventHandler<HTMLButtonElement>
  isMobile?: boolean
}

const BaseFilter: React.FunctionComponent<
  PropsWithChildren<IBaseFilterProps>
> = ({ children, onClick, onSearch, isMobile }) => {
  return (
    <div
      className={
        "flex flex-col items-center gap-y-2 w-full h-fit px-2 py-4 rounded-2xl border-theme-one-100 "
      }
    >
      {children}
      <BaseButton className="test-xs text-gray-500 font-thin" onClick={onClick}>
        重設
      </BaseButton>
      {isMobile ? (
        <></>
      ) : (
        <BaseButton
          onClick={onSearch}
          className="border-2 rounded-3xl hover:animate-borderGrayDeep"
        >
          搜尋
        </BaseButton>
      )}
    </div>
  )
}

export default BaseFilter
