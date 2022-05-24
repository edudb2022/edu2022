import { ExtendModalUnstyled, Modal, ModalTypeMap } from "@mui/material";

import React, { PropsWithChildren } from "react";

//extends ExtendModalUnstyled<ModalTypeMap>
export interface IBaseModalProps {
  className?: string;
  isOpen: boolean;
  title: string;
}

const BaseModal: React.FunctionComponent<
  PropsWithChildren<IBaseModalProps>
> = ({ children, className, isOpen, title, ...props }) => {
  return (
    <Modal open={true} {...props}>
      <div
        className={`absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white h-80 w-80 md:h-96 md:w-96  rounded-2xl outline-none ${className}`}
      >
        <div className="w-full text-center p-2 border-b border-black  ">
          {title}
        </div>

        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
