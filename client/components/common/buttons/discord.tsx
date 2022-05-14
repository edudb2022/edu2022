import React from "react";
import BaseButton, { IBaseButtonProps } from ".";
import { FaDiscord } from "react-icons/fa";

interface IDiscordButtonProps extends IBaseButtonProps {}

const DiscordButton: React.FunctionComponent<IDiscordButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={` gap-x-1 text-lg bg-[#5865F2]  text-white hover:shadow-md  hover:shadow-[#5865F2] ${className}`}
      {...props}
    >
      <FaDiscord className="" />
      <span className="">Discord</span>
    </BaseButton>
  );
};

//flex flex-row justify-between items-center

export default DiscordButton;
