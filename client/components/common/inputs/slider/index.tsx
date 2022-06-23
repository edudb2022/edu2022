import { ExtendSliderUnstyled } from "@mui/base"
import { Slider, SliderTypeMap } from "@mui/material"
import React from "react"

export interface IBaseSliderProps extends ExtendSliderUnstyled<SliderTypeMap> {
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void
}

const BaseSlider: React.FunctionComponent<IBaseSliderProps> = ({
  onChange,
  ...props
}) => {
  return <Slider size="medium" color="primary" onChange={onChange} {...props} />
}

export default BaseSlider
