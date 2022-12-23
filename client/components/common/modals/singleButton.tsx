import React, { ButtonHTMLAttributes, PropsWithChildren } from "react"
import BaseModal, { IBaseModalProps } from "."

export interface ISingleButtonModalProps
  extends IBaseModalProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string
  buttonClassName?: string
}

const SingleButtonModal: React.FunctionComponent<
  PropsWithChildren<ISingleButtonModalProps>
> = ({ buttonTitle, buttonClassName, children, onClick, ...props }) => {
  return (
    <BaseModal {...props}>
      <div>
        {children}

        <button
          className={`absolute bottom-0 left-0 w-full p-2 rounded-b-2xl  ${buttonClassName}`}
          onClick={onClick}
        >
          {buttonTitle}
        </button>
      </div>
    </BaseModal>
  )
}

export default SingleButtonModal
