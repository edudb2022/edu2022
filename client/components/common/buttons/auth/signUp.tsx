import React from "react"
import BaseButton, { IBaseButtonProps } from ".."
import { STRedirectToSignUp } from "../../../../service/supertoken/function"

interface ISignUpButtonProps extends IBaseButtonProps {}
const SignUpButton: React.FunctionComponent<ISignUpButtonProps> = ({
  ...props
}) => {
  const handleClick = () => {
    STRedirectToSignUp()
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
