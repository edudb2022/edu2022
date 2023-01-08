import React from "react"
import { FaInstagram } from "react-icons/fa"

interface IInstagramIconProps {
  className?: string
}
const InstagramIcon: React.FunctionComponent<IInstagramIconProps> = ({
  className
}) => {
  return <FaInstagram className={className} />
}

export default InstagramIcon
