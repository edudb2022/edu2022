import React from "react"
import BaseButton, { IBaseButtonProps } from "."
import { FaDiscord } from "react-icons/fa"
import DiscordIcon from "../icons/discord"

interface IDiscordButtonProps extends IBaseButtonProps {}

const DiscordButton: React.FunctionComponent<IDiscordButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={` gap-x-1 text-sm bg-[#5865F2]  text-white hover:shadow-md  hover:shadow-[#5865F2] ${className}`}
      {...props}
    >
      <DiscordIcon />
      <span>Discord</span>
    </BaseButton>
  )
}

export default DiscordButton
