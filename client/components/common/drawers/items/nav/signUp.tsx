import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { STRedirectToSignUp } from "../../../../../service/supertoken/function"
import trackingEvent from "../../../../../utils/services/GoogleAnalytics/tracking"
import SignUpIcon from "../../../icons/signUp"

interface IDrawerSignUpProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignUpitem: React.FunctionComponent<IDrawerSignUpProps> = ({
  ...props
}) => {
  const hanldeClick = () => {
    trackingEvent.customEvent("click_signup_nav_drawer")
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
