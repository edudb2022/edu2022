import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import ProfileIcon from "../../../icons/profile"
interface INavDrawerProfileItemProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerProfileItem: React.FunctionComponent<
  INavDrawerProfileItemProps
> = ({ ...props }) => {
  return <BaseNavDraweritem icon={<ProfileIcon />} title="Profile" {...props} />
}

export default NavDrawerProfileItem
