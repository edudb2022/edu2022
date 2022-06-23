import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { ImPacman } from "react-icons/im"
import { AiFillAlipayCircle } from "react-icons/ai"
interface INavDrawerProfileItemProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerProfileItem: React.FunctionComponent<
  INavDrawerProfileItemProps
> = ({ ...props }) => {
  return <BaseNavDraweritem icon={<ImPacman />} title="Profile" {...props} />
}

export default NavDrawerProfileItem
