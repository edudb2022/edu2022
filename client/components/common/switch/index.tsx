import { Switch, SwitchProps } from "@mui/material"
import React from "react"

export interface IBaseSwitchProps extends SwitchProps {}

const BaseSwitch: React.FunctionComponent<IBaseSwitchProps> = ({
  ...props
}) => {
  return <Switch {...props} />
}

export default BaseSwitch
