import React, { PropsWithChildren } from "react"
import BaseModal, { IBaseModalProps } from "."

interface IDoubleButtonModalProps extends IBaseModalProps {
  leftButtonTitle: string
  leftButtonClassName?: string
  rightButtonTile: string
  rightButtonClassName?: string
}

const DoubleButtonModal: React.FunctionComponent<
  PropsWithChildren<IDoubleButtonModalProps>
> = ({
  children,

  leftButtonTitle,
  leftButtonClassName,
  rightButtonTile,
  rightButtonClassName,
  ...props
}) => {
  return (
    <BaseModal {...props}>
      {children}

      <div className="absolute bottom-0 left-0 w-full">
        <button
          className={` p-2 rounded-bl-2xl  w-1/2 bg-[#319795] text-white ${rightButtonClassName}`}
        >
          {leftButtonTitle}
        </button>
        <button
          className={`p-2 rounded-br-2xl w-1/2  bg-[#3197] text-white ${leftButtonClassName}`}
        >
          {rightButtonTile}
        </button>
      </div>
    </BaseModal>
  )
}

export default DoubleButtonModal
