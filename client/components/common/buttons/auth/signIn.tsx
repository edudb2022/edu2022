import React from "react";
import BaseButton, { IBaseButtonProps } from "..";

interface ISignInButtonProps extends IBaseButtonProps {}
const SignInButton: React.FunctionComponent<ISignInButtonProps> = ({
  ...props
}) => {
  return <BaseButton {...props}>登入</BaseButton>;
};

export default SignInButton;
