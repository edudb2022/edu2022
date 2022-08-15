import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { STRedirectToSignIn } from "../../../../../service/supertoken/function"
import LogInIcon from "../../../icons/logIn"

interface IDrawerSignInProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignInitem: React.FunctionComponent<IDrawerSignInProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="Sign In"
      icon={<LogInIcon />}
      handleClick={() => STRedirectToSignIn()}
      {...props}
    />
  )
}

export default NavDrawerSignInitem
