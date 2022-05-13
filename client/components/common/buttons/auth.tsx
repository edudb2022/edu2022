import React from "react";
import BaseButton, { IBaseButtonProps } from ".";

interface IAuthButtonProps extends IBaseButtonProps {}

const AuthButton: React.FunctionComponent<IAuthButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseButton className={`${className}`} {...props}>
      登入 | 註冊
    </BaseButton>
  );
};

export default AuthButton;
