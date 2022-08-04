import { link } from "fs"
import React from "react"
import { FaDiscord } from "react-icons/fa"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."

interface IDrawerDiscordProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerDiscorditem: React.FunctionComponent<IDrawerDiscordProps> = ({
  ...props
}) => {
  return (
    <BaseNavDraweritem
      title="Discord"
      icon={<FaDiscord />}
      link="http://www.discord.com"
      {...props}
    />
  )
}

export default NavDrawerDiscorditem
