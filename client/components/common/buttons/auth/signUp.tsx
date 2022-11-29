import React from "react"
import BaseButton, { IBaseButtonProps } from ".."
import { STRedirectToSignUp } from "../../../../service/supertoken/function"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

interface ISignUpButtonProps extends IBaseButtonProps {}
const SignUpButton: React.FunctionComponent<ISignUpButtonProps> = ({
  ...props
}) => {
  const handleClick = () => {
    STRedirectToSignUp()
    trackingEvent.customEvent("click_signup_nav")
  }
  return (
    <BaseButton
      className="text-white bg-theme-one-500 border-2 border-theme-one-500 text-sm rounded-3xl hover:animate-themeOneHover"
      onClick={handleClick}
      {...props}
    >
      注冊
    </BaseButton>
  )
}

export default SignUpButton
