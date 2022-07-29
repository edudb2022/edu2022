import React from "react"
import { ImArrowRight2 } from "react-icons/im"

interface IRightArrowIconProps {
  className: string
}

const RightArrowIcon: React.FunctionComponent<IRightArrowIconProps> = ({
  className
}) => {
  return <ImArrowRight2 className={`${className}`} />
}

export default RightArrowIcon
