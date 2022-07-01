import { ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material"
import React from "react"

export interface IBaseToggleButtonGroupProps extends ToggleButtonGroupProps {
  className?: string
}

const BaseToggleButtonGroup: React.FunctionComponent<
  IBaseToggleButtonGroupProps
> = ({ children, className, ...props }) => {
  return (
    <ToggleButtonGroup className={`${className}`} {...props}>
      {children}
    </ToggleButtonGroup>
  )
}

export default BaseToggleButtonGroup
