import React from "react"
import ReviewBaseItem, { IReviewBaseItemProps } from "."

interface IReviewNumberItemProps extends IReviewBaseItemProps {
  title: string
  detail: number
  subtitle?: string
}

const ReviewNumberItem: React.FunctionComponent<IReviewNumberItemProps> = ({
  title,
  detail,
  subtitle,
}) => {
  return (
    <ReviewBaseItem title={title} subtitle={subtitle}>
      <h6 className="text-3xl">{detail}</h6>
    </ReviewBaseItem>
  )
}

export default ReviewNumberItem
