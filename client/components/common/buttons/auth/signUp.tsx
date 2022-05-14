import React from "react";
import BaseButton, { IBaseButtonProps } from "..";

interface ISignUpButtonProps extends IBaseButtonProps {}
const SignUpButton: React.FunctionComponent<ISignUpButtonProps> = ({
  ...props
}) => {
  return <BaseButton {...props}>登入</BaseButton>;
};

export default SignUpButton;
