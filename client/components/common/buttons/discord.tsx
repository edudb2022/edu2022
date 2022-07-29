import React from "react"
import BaseButton, { IBaseButtonProps } from "."
import DiscordIcon from "../icons/discord"

interface IDiscordButtonProps extends IBaseButtonProps {}

const DiscordButton: React.FunctionComponent<IDiscordButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={` gap-x-1 text-sm bg-[#5865F2] border-[#5865F2] text-white border-2 rounded-3xl hover:animate-discordHover  ${className}`}
      {...props}
    >
      <DiscordIcon />
      <span>Discord</span>
    </BaseButton>
  )
}

export default DiscordButton
