import React from "react";

export type IBaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const BaseButton: React.FunctionComponent<IBaseButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={`p-2 rounded-lg border-2 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
