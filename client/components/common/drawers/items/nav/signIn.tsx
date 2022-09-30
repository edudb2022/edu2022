import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { STRedirectToSignIn } from "../../../../../service/supertoken/function"
import LogInIcon from "../../../icons/logIn"

interface IDrawerSignInProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignInitem: React.FunctionComponent<IDrawerSignInProps> = ({
  ...props
}) => {
  const hanldeClick = () => {
    STRedirectToSignIn()
  }
  return (
    <BaseNavDraweritem
      title="登入"
      icon={<LogInIcon />}
      handleClick={hanldeClick}
      {...props}
    />
  )
}

export default NavDrawerSignInitem
