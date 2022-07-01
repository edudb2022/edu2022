import { ToggleButton } from "@mui/material"
import React from "react"
import BaseToggleButtonGroup, { IBaseToggleButtonGroupProps } from "."
import RatingToggleButton from "../../toggleButton/rating"

interface IRatingToggleButtonGroupProps extends IBaseToggleButtonGroupProps {
  ratingTitle: any
}

const RatingToggleButtonGroup: React.FunctionComponent<
  IRatingToggleButtonGroupProps
> = ({ id, ratingTitle, ...props }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-6 ">
      <h6>0</h6>
      <BaseToggleButtonGroup exclusive {...props} size="large">
        <RatingToggleButton
          id={id!}
          value={"1"}
          aria-label={"1"}
        >{`${ratingTitle[0].label}`}</RatingToggleButton>
        <RatingToggleButton id={id!} value={"2"} aria-label={"2"}>
          {`${ratingTitle[1].label}`}
        </RatingToggleButton>
        <RatingToggleButton id={id!} value={"3"} aria-label={"3"}>
          {`${ratingTitle[2].label}`}
        </RatingToggleButton>
        <RatingToggleButton id={id!} value={"4"} aria-label={"4"}>
          {`${ratingTitle[3].label}`}
        </RatingToggleButton>
        <RatingToggleButton id={id!} value={"5"} aria-label={"5"}>
          {`${ratingTitle[4].label}`}
        </RatingToggleButton>
        <RatingToggleButton id={id!} value={"6"} aria-label={"6"}>
          {`${ratingTitle[5].label}`}
        </RatingToggleButton>
      </BaseToggleButtonGroup>
      <h6>5</h6>
    </div>
  )
}

export default RatingToggleButtonGroup
