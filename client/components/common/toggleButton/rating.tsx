import React, { PropsWithChildren } from "react"

import BaseToggleButton, { IBaseToggleButtonProps } from "."

interface IRatingToggleButtonProps extends IBaseToggleButtonProps {
  color?: string
}

import MuiToggleButton from "@mui/material/ToggleButton"
import { styled } from "@mui/material/styles"

const RatingToggleButton: React.FunctionComponent<
  PropsWithChildren<IRatingToggleButtonProps>
> = ({ value, children, id, ...props }) => {
  return (
    <BaseToggleButton value={value} id={id} {...props}>
      {children}
    </BaseToggleButton>
  )
}

export default RatingToggleButton
