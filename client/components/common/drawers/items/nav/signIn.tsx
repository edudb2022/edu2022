import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { AiFillAlipayCircle } from "react-icons/ai"
import { ImPacman } from "react-icons/im"

interface IDrawerSignInProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignInitem: React.FunctionComponent<IDrawerSignInProps> = ({
  ...props
}) => {
  return <BaseNavDraweritem title="Sign In" icon={<ImPacman />} {...props} />
}

export default NavDrawerSignInitem
