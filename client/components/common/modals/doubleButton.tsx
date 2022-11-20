import React, { MouseEventHandler, PropsWithChildren } from "react"
import BaseModal, { IBaseModalProps } from "."

export interface IDoubleButtonModalProps extends IBaseModalProps {
  leftButtonTitle: string
  leftButtonClassName?: string
  rightButtonTile: string
  rightButtonClassName?: string
  onRightClick: MouseEventHandler<HTMLButtonElement>
  onLeftClick: MouseEventHandler<HTMLButtonElement>
}

const DoubleButtonModal: React.FunctionComponent<
  PropsWithChildren<IDoubleButtonModalProps>
> = ({
  children,
  leftButtonTitle,
  leftButtonClassName,
  rightButtonTile,
  rightButtonClassName,
  onRightClick,
  onLeftClick,
  ...props
}) => {
  return (
    <BaseModal {...props}>
      {children}

      <div className="absolute bottom-0 left-0 w-full">
        <button
          className={` p-2 rounded-bl-2xl w-1/2 bg-gray-50 text-gray-500  ${rightButtonClassName}`}
          onClick={onLeftClick}
        >
          {leftButtonTitle}
        </button>
        <button
          className={`p-2 rounded-br-2xl w-1/2 bg-theme-one-50 text-theme-one-500 ${leftButtonClassName}`}
          onClick={onRightClick}
        >
          {rightButtonTile}
        </button>
      </div>
    </BaseModal>
  )
}

export default DoubleButtonModal
