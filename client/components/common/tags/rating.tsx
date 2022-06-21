import React, { useState, useEffect } from "react"
import BaseTag, { IBaseTagProps } from "."

interface IRantingTagProps extends IBaseTagProps {
  title: string
  rating: number
}

const RatingTag: React.FunctionComponent<IRantingTagProps> = ({
  title,
  className,
  rating
}) => {
  const color = [
    `bg-rating-1-200 text-rating-1-700`,
    `bg-rating-2-200 text-rating-2-700`,
    `bg-rating-3-200 text-rating-4-700`,
    `bg-rating-4-200 text-rating-4-700`,
    `bg-rating-5-200 text-rating-5-700`
  ]
  const ratingColor = [
    `border-rating-1-400 text-rating-1-700`,
    `border-rating-2-400 text-rating-2-700`,
    `border-rating-3-400 text-rating-4-700`,
    `border-rating-4-400 text-rating-4-700`,
    `border-rating-5-400 text-rating-5-700`
  ]

  const ROUNDED_OFF_RATING = Math.round(rating)
  return (
    <BaseTag
      title={title}
      rating={rating}
      className={`   ${color[ROUNDED_OFF_RATING - 1]} ${className}`}
      ratingClassName={`border-2  ${ratingColor[ROUNDED_OFF_RATING - 1]} `}
    />
  )
}

export default RatingTag
