import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { STRedirectToSignUp } from "../../../../../service/supertoken/function"
import SignUpIcon from "../../../icons/signUp"

interface IDrawerSignUpProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignUpitem: React.FunctionComponent<IDrawerSignUpProps> = ({
  ...props
}) => {
  const hanldeClick = () => {
    STRedirectToSignUp()
  }
  return (
    <BaseNavDraweritem
      title="注冊"
      icon={<SignUpIcon />}
      handleClick={hanldeClick}
      {...props}
    />
  )
}

export default NavDrawerSignUpitem
