import React from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import DiscordIcon from "../../../icons/discord"
import InstagramIcon from "../../../icons/instagram"

interface IDrawerDiscordProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerInstagramItem: React.FunctionComponent<IDrawerDiscordProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="追蹤IG"
      icon={<InstagramIcon />}
      url="http://www.discord.com"
      {...props}
    />
  )
}

export default NavDrawerInstagramItem
