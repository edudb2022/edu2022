import { Backdrop } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface IBaseBackDropProps {
  className?: string;
  isOpen: boolean;
}

const BaseBackDrop: React.FunctionComponent<
  PropsWithChildren<IBaseBackDropProps>
> = ({ children, className, isOpen, ...props }) => {
  return (
    <Backdrop className={`${className}`} open={isOpen} {...props}>
      {children}
    </Backdrop>
  );
};

export default BaseBackDrop;
