import React, { MouseEventHandler, PropsWithChildren } from "react"
import BaseDrawer, { IBaseDrawerProps } from ".."
import BaseButton from "../../buttons"
import StickyBottomButton from "../../buttons/stickyBottom"

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

      <StickyBottomButton onClick={onSearchClick} title="搜尋" />
    </BaseDrawer>
  )
}

export default BaseFilterDrawer
