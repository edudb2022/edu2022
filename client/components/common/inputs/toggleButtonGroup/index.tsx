import { ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material"
import React from "react"

export interface IBaseToggleButtonGroupProps extends ToggleButtonGroupProps {}

const BaseToggleButtonGroup: React.FunctionComponent<
  IBaseToggleButtonGroupProps
> = ({ children, ...props }) => {
  return <ToggleButtonGroup {...props}>{children}</ToggleButtonGroup>
}

export default BaseToggleButtonGroup
