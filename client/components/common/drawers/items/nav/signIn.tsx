import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { AiFillAlipayCircle } from "react-icons/ai"
import { FiLogIn } from "react-icons/fi"
import { STRedirectToSignIn } from "../../../../../service/supertoken/function"

interface IDrawerSignInProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignInitem: React.FunctionComponent<IDrawerSignInProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="Sign In"
      icon={<FiLogIn />}
      handleClick={() => STRedirectToSignIn()}
      {...props}
    />
  )
}

export default NavDrawerSignInitem
