import React from "react"
import BaseButton, { IBaseButtonProps } from ".."

interface ISignUpButtonProps extends IBaseButtonProps {}
const SignUpButton: React.FunctionComponent<ISignUpButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton className="text-white bg-theme-one-400 text-sm" {...props}>
      注冊
    </BaseButton>
  )
}

export default SignUpButton
