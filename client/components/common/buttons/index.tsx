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
      className={`px-4  py-2 rounded-3xl flex flex-row items-center  md:px-10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
