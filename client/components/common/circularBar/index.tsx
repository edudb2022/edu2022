import React, { Children, PropsWithChildren } from "react"
import {
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar"

export interface IBaseBaseCircularBarProps {
  currentValue: number
  maxValue: number
  pathColor: string
  trailColor: string
  children?: React.ReactNode
}

const BaseCircularBar: React.FunctionComponent<IBaseBaseCircularBarProps> = ({
  currentValue,
  maxValue,
  pathColor,
  trailColor,
  children
}) => {
  return (
    <CircularProgressbarWithChildren
      value={currentValue}
      maxValue={maxValue}
      styles={buildStyles({
        rotation: 1,
        pathTransitionDuration: 0.5,
        pathColor: pathColor,
        trailColor: trailColor
      })}
    >
      {children}
    </CircularProgressbarWithChildren>
  )
}

export default BaseCircularBar
