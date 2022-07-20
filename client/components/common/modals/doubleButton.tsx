import React, { MouseEventHandler, PropsWithChildren } from "react"
import BaseModal, { IBaseModalProps } from "."

export interface IDoubleButtonModalProps extends IBaseModalProps {
  leftButtonTitle: string
  leftButtonClassName?: string
  rightButtonTile: string
  rightButtonClassName?: string
  onRightCick: MouseEventHandler<HTMLButtonElement>
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
  onRightCick,
  onLeftClick,
  ...props
}) => {
  return (
    <BaseModal {...props}>
      {children}

      <div className="absolute bottom-0 left-0 w-full">
        <button
          className={` p-2 rounded-bl-2xl w-1/2 bg-gray-300 text-white  ${rightButtonClassName}`}
          onClick={onLeftClick}
        >
          {leftButtonTitle}
        </button>
        <button
          className={`p-2 rounded-br-2xl w-1/2 bg-theme-one-500 text-white ${leftButtonClassName}`}
          onClick={onRightCick}
        >
          {rightButtonTile}
        </button>
      </div>
    </BaseModal>
  )
}

export default DoubleButtonModal
