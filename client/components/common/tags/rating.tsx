import React from "react"
import BaseTag, { IBaseTagProps } from "."

export interface IRantingTagProps extends IBaseTagProps {
  title: string
  rating: number
  header?: string
  headerClassName?: string
}

export const ratingTextAndBackgroundColor = [
  "bg-rating-1-200 text-rating-1-700 border-rating-4-400",
  "bg-rating-2-200 text-rating-2-700",
  "bg-rating-3-400 text-rating-3-900",
  "bg-rating-4-200 text-rating-4-700",
  "bg-rating-5-200 text-rating-5-700",
  "bg-rating-6-200 text-rating-6-700"
]
export const ratingBorderColor = [
  "border-rating-1-400",
  "border-rating-2-400",
  "border-rating-3-700",
  "border-rating-4-400",
  "border-rating-5-400",
  "border-rating-6-400"
]

const RatingTag: React.FunctionComponent<IRantingTagProps> = ({
  title,
  className,
  rating,
  ratingClassName,
  header,
  titleClassName,
  headerClassName,
  ...props
}) => {
  const ROUNDED_OFF_RATING = Math.round(rating)

  return (
    <div className=" flex flex-col justify-center items-center ">
      <p className={`text-mb text-gray-400 mb-0 ${headerClassName}`}>
        {header}
      </p>
      <BaseTag
        title={title}
        rating={rating}
        className={` ${className} ${ratingTextAndBackgroundColor[ROUNDED_OFF_RATING]}`}
        ratingClassName={`${ratingBorderColor[ROUNDED_OFF_RATING]}  ${ratingClassName}`}
        titleClassName={`${titleClassName}`}
        {...props}
      />
    </div>
  )
}

export default RatingTag
