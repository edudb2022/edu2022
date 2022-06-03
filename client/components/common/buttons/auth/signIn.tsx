import React from "react";
import BaseButton, { IBaseButtonProps } from "..";

interface ISignInButtonProps extends IBaseButtonProps {}
const SignInButton: React.FunctionComponent<ISignInButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton className="text-black-500 text-sm" {...props}>
      登入
    </BaseButton>
  );
};

export default SignInButton;
