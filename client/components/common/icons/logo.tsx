import React from "react"

interface IGoodTurtleIconProps {
  className?: string
}

const GoodTurtleIcon: React.FunctionComponent<IGoodTurtleIconProps> = ({
  className
}) => {
  return <div className={` font-mono ${className}`}>GoodTurtle.fyi</div>
}

export default GoodTurtleIcon
