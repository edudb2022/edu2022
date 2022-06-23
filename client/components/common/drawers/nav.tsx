import React from "react"
import BaseDrawer, { IBaseDrawerProps } from "."
import NavDrawerProfileItem from "./items/nav/profile"

import NavDrawerSignInitem from "./items/nav/signIn"
import NavDrawerSignOutitem from "./items/nav/singnOut"

interface INavDrawer extends IBaseDrawerProps {
  isOpen: boolean
}

const NavDrawer: React.FunctionComponent<INavDrawer> = ({
  onClose,
  isOpen
}) => {
  return (
    <BaseDrawer anchor="right" open={isOpen} onClose={onClose}>
      <div className="w-60">
        <NavDrawerProfileItem />
        <NavDrawerSignOutitem />
        <NavDrawerSignInitem />
      </div>
    </BaseDrawer>
  )
}

export default NavDrawer
