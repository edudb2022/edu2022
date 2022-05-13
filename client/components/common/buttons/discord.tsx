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
      className={`flex flex-row justify-center items-center text-lg bg-[#5865F2] text-white ${className}`}
      {...props}
    >
      <FaDiscord /> Discord
    </BaseButton>
  );
};

export default DiscordButton;
