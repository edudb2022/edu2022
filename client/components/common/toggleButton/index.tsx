import {
  ExtendButtonBase,
  ToggleButton,
  ToggleButtonTypeMap
} from "@mui/material"
import React, { PropsWithChildren } from "react"

interface IBaseToggleButtonProps {
  value: string | number
}

const BaseToggleButton: React.FunctionComponent<
  PropsWithChildren<IBaseToggleButtonProps>
> = ({ children, value, ...props }) => {
  return (
    <ToggleButton value={value} {...props}>
      {children}
    </ToggleButton>
  )
}

export default BaseToggleButton
