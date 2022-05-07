import React from "react";

export type IBaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const BaseButton: React.FunctionComponent<IBaseButtonProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export default BaseButton;
