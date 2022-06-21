import React from "react"
import BaseTag, { IBaseTagProps } from "."
import {
  ratingBorderColor,
  ratingTextAndBackgroundColor
} from "../../../constants/colors"

interface IRantingTagProps extends IBaseTagProps {
  title: string
  rating: number
}

const RatingTag: React.FunctionComponent<IRantingTagProps> = ({
  title,
  className,
  rating,
  ratingClassName,
  ...props
}) => {
  const ROUNDED_OFF_RATING = Math.round(rating)
  return (
    <BaseTag
      title={title}
      rating={rating}
      className={`  ${
        ratingTextAndBackgroundColor[ROUNDED_OFF_RATING - 1]
      } ${className}`}
      ratingClassName={` ${
        ratingBorderColor[ROUNDED_OFF_RATING - 1]
      } ${ratingClassName} `}
      {...props}
    />
  )
}

export default RatingTag
