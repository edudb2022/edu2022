import { ExtendButtonBase, ToggleButtonTypeMap } from "@mui/material"
import React, { PropsWithChildren } from "react"
import { styled } from "@mui/material/styles"
import MuiToggleButton from "@mui/material/ToggleButton"
import { rankColor } from "../../../constants/colors"

// const ToggleButton = styled(MuiToggleButton)(({ theme }) =>({

// })
export interface IBaseToggleButtonProps {
  value: string
  id: string
}

const BgColor = rankColor

const ToggleButton = styled(MuiToggleButton)(({ value }: string) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: BgColor[parseInt(value) - 1]
  }
}))

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
