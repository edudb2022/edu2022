import React, { MouseEventHandler, PropsWithChildren } from "react"
import BaseDrawer, { IBaseDrawerProps } from ".."
import BaseButton from "../../buttons"

export interface IBaseFilterDrawerProps extends IBaseDrawerProps {
  isOpen: boolean
  onSearchClick: MouseEventHandler<HTMLButtonElement>
}

const BaseFilterDrawer: React.FunctionComponent<
  PropsWithChildren<IBaseFilterDrawerProps>
> = ({ children, isOpen, onClose, onSearchClick }) => {
  return (
    <BaseDrawer anchor="left" open={isOpen} onClose={onClose}>
      <div className="w-screen h-screen flex items-center justify-center border-2">
        {children}
      </div>

      <BaseButton
        onClick={onSearchClick}
        className="bg-theme-one-500 text-white fixed bottom-0 w-full rounded-none flex justify-center"
      >
        <h2>Search</h2>
      </BaseButton>
    </BaseDrawer>
  )
}

export default BaseFilterDrawer
