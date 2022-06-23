import React, { PropsWithChildren } from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { ImPacman } from "react-icons/im"

interface INavDrawerSignOutitemProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignOutitem: React.FunctionComponent<
  INavDrawerSignOutitemProps
> = ({ ...props }) => {
  return (
    <BaseNavDraweritem icon={<ImPacman />} title="sign out" {...props}>
      Sign Out
    </BaseNavDraweritem>
  )
}

export default NavDrawerSignOutitem
