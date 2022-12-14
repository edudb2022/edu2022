import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import DiscordIcon from "../../../icons/discord"

interface IDrawerDiscordProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerDiscorditem: React.FunctionComponent<IDrawerDiscordProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="Discord"
      icon={<DiscordIcon />}
      url="http://www.discord.com"
      {...props}
    />
  )
}

export default NavDrawerDiscorditem
