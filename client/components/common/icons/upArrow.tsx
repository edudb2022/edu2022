import React from "react"
import { ImArrowUp2 } from "react-icons/im"

interface IRightArrowIconProps {
  className?: string
}

const UpArrowIcon: React.FunctionComponent<IRightArrowIconProps> = ({
  className
}) => {
  return <ImArrowUp2 className={`${className}`} />
}

export default UpArrowIcon
