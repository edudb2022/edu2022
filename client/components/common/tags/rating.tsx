import React from "react"
import BaseTag, { IBaseTagProps } from "."

interface IRantingTagProps extends IBaseTagProps {
  title: string
  rating: number
}

export const ratingTextAndBackgroundColor = [
  "bg-rating-1-200 text-rating-1-700",
  "bg-rating-2-200 text-rating-2-700",
  "bg-rating-3-200 text-rating-3-700",
  "bg-rating-4-200 text-rating-4-700",
  "bg-rating-5-200 text-rating-5-700"
]
export const ratingBorderColor = [
  "border-rating-1-400 ",
  "border-rating-2-400 ",
  "border-rating-3-400 ",
  "border-rating-4-400 ",
  "border-rating-5-400 "
]
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
      className={ratingTextAndBackgroundColor[ROUNDED_OFF_RATING - 1]}
      ratingClassName={ratingBorderColor[ROUNDED_OFF_RATING - 1]}
      {...props}
    />
  )
}

export default RatingTag
