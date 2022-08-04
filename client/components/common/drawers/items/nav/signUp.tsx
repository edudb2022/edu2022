import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { AiFillAlipayCircle, AiOutlineForm } from "react-icons/ai"
import { ImPacman } from "react-icons/im"
import { STRedirectToSignUp } from "../../../../../service/supertoken/function"

interface IDrawerSignUpProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignUpitem: React.FunctionComponent<IDrawerSignUpProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="Sign Up"
      icon={<AiOutlineForm />}
      handleClick={() => STRedirectToSignUp()}
      {...props}
    />
  )
}

export default NavDrawerSignUpitem
