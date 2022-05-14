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
    <button
      className={`p-2 rounded-lg flex flex-row  items-center  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
