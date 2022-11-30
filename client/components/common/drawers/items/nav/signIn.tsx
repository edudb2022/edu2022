import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { STRedirectToSignIn } from "../../../../../service/supertoken/function"
import trackingEvent from "../../../../../utils/services/GoogleAnalytics/tracking"
import LogInIcon from "../../../icons/logIn"

interface IDrawerSignInProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignInitem: React.FunctionComponent<IDrawerSignInProps> = ({
  ...props
}) => {
  const handleClick = () => {
    trackingEvent.customEvent("click_signin_nav_drawer")
    STRedirectToSignIn()
  }
  return (
    <BaseNavDraweritem
      title="登入"
      icon={<LogInIcon />}
      handleClick={handleClick}
      {...props}
    />
  )
}

export default NavDrawerSignInitem
