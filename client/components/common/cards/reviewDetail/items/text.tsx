import React from "react"
import ReviewBaseItem, { IReviewBaseItemProps } from "."

interface IReviewTextItemProps extends IReviewBaseItemProps {
  title: string
  detail: string
  subtitle?: string
}

const ReviewTextItem: React.FunctionComponent<IReviewTextItemProps> = ({
  title,
  detail,
  subtitle
}) => {
  return (
    <ReviewBaseItem title={title} subtitle={subtitle}>
      <h6 className="text-xl h-full ">{detail}</h6>
    </ReviewBaseItem>
  )
}

export default ReviewTextItem
