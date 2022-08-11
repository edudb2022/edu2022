import React from "react"
import BaseButton, { IBaseButtonProps } from ".."
import { STRedirectToSignIn } from "../../../../service/supertoken/function"

interface ISignInButtonProps extends IBaseButtonProps {}
const SignInButton: React.FunctionComponent<ISignInButtonProps> = ({
  ...props
}) => {
  const handleClick = () => {
    STRedirectToSignIn()
  }
  return (
    <BaseButton
      className="text-black-500 text-sm font-normal border-2 rounded-2xl hover:animate-blackBorderHover"
      onClick={handleClick}
      {...props}
    >
      登入
    </BaseButton>
  )
}

export default SignInButton
