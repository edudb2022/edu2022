import { Drawer, DrawerProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface IBaseDrawerProps extends DrawerProps {}

const BaseDrawer: React.FunctionComponent<
  PropsWithChildren<IBaseDrawerProps>
> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>;
};

export default BaseDrawer;
