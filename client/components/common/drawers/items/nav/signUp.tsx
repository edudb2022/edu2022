import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { STRedirectToSignUp } from "../../../../../service/supertoken/function"
import SignUpIcon from "../../../icons/signUp"

interface IDrawerSignUpProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignUpitem: React.FunctionComponent<IDrawerSignUpProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="Sign Up"
      icon={<SignUpIcon />}
      handleClick={() => STRedirectToSignUp()}
      {...props}
    />
  )
}

export default NavDrawerSignUpitem
