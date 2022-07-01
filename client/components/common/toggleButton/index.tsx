import {
  ExtendButtonBase,
  ToggleButton,
  ToggleButtonTypeMap
} from "@mui/material"
import React, { PropsWithChildren } from "react"
import { styled } from "@mui/material/styles"
import MuiToggleButton from "@mui/material/ToggleButton"
import { rankColor } from "../../../constants/colors"

// const ToggleButton = styled(MuiToggleButton)(({ theme }) =>({

// })
export interface IBaseToggleButtonProps {
  value: string
  id: string
  className?: string
  color?:
    | "standard"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
}

const BaseToggleButton: React.FunctionComponent<
  PropsWithChildren<IBaseToggleButtonProps>
> = ({ children, className, color, ...props }) => {
  return (
    <ToggleButton className={className} color={color} {...props}>
      {children}
    </ToggleButton>
  )
}

export default BaseToggleButton
