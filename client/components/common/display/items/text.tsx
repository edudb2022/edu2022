import React from "react"
import ReviewBaseItem, { IReviewBaseItemProps } from "."

interface IReviewTextItemProps extends IReviewBaseItemProps {
  title: string
  detail: string
  subtitle?: string
  className?: string
}

const ReviewTextItem: React.FunctionComponent<IReviewTextItemProps> = ({
  title,
  detail,
  subtitle,
  className
}) => {
  return (
    <ReviewBaseItem title={title} subtitle={subtitle}>
      <h6 className={`text-base md:text-xl ${className}`}>{detail}</h6>
    </ReviewBaseItem>
  )
}

export default ReviewTextItem
