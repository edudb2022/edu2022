import { ExtendModalUnstyled, Modal, ModalTypeMap } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface IBaseModalProps extends ExtendModalUnstyled<ModalTypeMap> {
  className?: string;
  isOpen: boolean;
}

const BaseModal: React.FunctionComponent<
  PropsWithChildren<IBaseModalProps>
> = ({ children, className, isOpen, ...props }) => {
  return (
    <Modal open={isOpen} {...props}>
      <div className={`absolute top-1/2 right-1/2 ${className}`}>
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
