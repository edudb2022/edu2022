import { ExtendModalUnstyled, Modal, ModalTypeMap } from "@mui/material"

import React, { PropsWithChildren } from "react"

export interface IBaseModalProps {
  className?: string
  isOpen: boolean
  content?: string
}

const BaseModal: React.FunctionComponent<
  PropsWithChildren<IBaseModalProps>
> = ({ children, className, isOpen, content, ...props }) => {
  return (
    <Modal open={isOpen} {...props}>
      <div
        className={`absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white h-48 w-80 md:h-56 md:w-96  rounded-2xl outline-none ${className}`}
      >
        {content && (
          <div className="w-full text-center p-2 border-b border-black">
            {content}
          </div>
        )}

        {children}
      </div>
    </Modal>
  )
}

export default BaseModal
