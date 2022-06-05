import React from "react";
import BaseDrawer, { IBaseDrawerProps } from ".";

interface INavDrawer extends IBaseDrawerProps {
  isOpen: boolean;
}

const NavDrawer: React.FunctionComponent<INavDrawer> = ({
  onClose,
  isOpen,
}) => {
  return (
    <BaseDrawer anchor="right" open={isOpen} onClose={onClose}>
      123
    </BaseDrawer>
  );
};

export default NavDrawer;
