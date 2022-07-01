import React, { PropsWithChildren } from "react"

import BaseToggleButton, { IBaseToggleButtonProps } from "."

interface IRatingToggleButtonProps extends IBaseToggleButtonProps {
  value: string
}

import MuiToggleButton from "@mui/material/ToggleButton"
import { styled } from "@mui/material/styles"
import { ratingTextAndBackgroundColor } from "../tags/rating"

const RatingToggleButton: React.FunctionComponent<
  PropsWithChildren<IRatingToggleButtonProps>
> = ({ value, children, id, color, ...props }) => {
  return (
    <BaseToggleButton value={value} color={color} id={id} {...props}>
      {children}
    </BaseToggleButton>
  )
}

export default RatingToggleButton
