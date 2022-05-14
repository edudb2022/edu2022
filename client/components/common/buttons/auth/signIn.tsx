import React from "react";
import BaseButton, { IBaseButtonProps } from "..";

interface ISignInButtonProps extends IBaseButtonProps {}
const SignInButton: React.FunctionComponent<ISignInButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton className="text-white bg-[#6C5CE7] " {...props}>
      登入
    </BaseButton>
  );
};

export default SignInButton;
