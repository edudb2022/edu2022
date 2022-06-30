import { ToggleButton } from "@mui/material"
import React from "react"
import BaseToggleButtonGroup, { IBaseToggleButtonGroupProps } from "."

interface IRatingToggleButtonGroupProps extends IBaseToggleButtonGroupProps {
  ratingTitle: any
}

const RatingToggleButtonGroup: React.FunctionComponent<
  IRatingToggleButtonGroupProps
> = ({ id, ratingTitle, ...props }) => {
  return (
    <BaseToggleButtonGroup exclusive {...props}>
      <h6>0</h6>
      <ToggleButton
        id={id}
        value={"1"}
        aria-label={"1"}
        color="primary"
      >{`${ratingTitle[0].label}`}</ToggleButton>
      <ToggleButton id={id} value={"2"} aria-label={"2"}>
        {`${ratingTitle[1].label}`}
      </ToggleButton>
      <ToggleButton id={id} value={"3"} aria-label={"3"}>
        {`${ratingTitle[2].label}`}
      </ToggleButton>
      <ToggleButton id={id} value={"4"} aria-label={"4"}>
        {`${ratingTitle[3].label}`}
      </ToggleButton>
      <ToggleButton id={id} value={"5"} aria-label={"5"}>
        {`${ratingTitle[4].label}`}
      </ToggleButton>
      <ToggleButton id={id} value={"6"} aria-label={"6"}>
        {`${ratingTitle[5].label}`}
      </ToggleButton>
      <h6>5</h6>
    </BaseToggleButtonGroup>
  )
}

export default RatingToggleButtonGroup
