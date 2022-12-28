import React from "react"
import ReviewBaseItem, { IReviewBaseItemProps } from "."
import { CommonCopyRight } from "../../../../utils/copyRight/common"

interface IReviewNumberItemProps extends IReviewBaseItemProps {
  title: string
  detail?: number | null
  subtitle?: string
}

const ReviewNumberItem: React.FunctionComponent<IReviewNumberItemProps> = ({
  title,
  detail,
  subtitle
}) => {
  return (
    <ReviewBaseItem title={title} subtitle={subtitle}>
      {detail ? (
        <h6 className="text-sx md:text-xl">{detail}</h6>
      ) : (
        <p className="text-sx font-semibold text-gray-400">
          {CommonCopyRight.NOT_APPLICABLE}
        </p>
      )}
    </ReviewBaseItem>
  )
}

export default ReviewNumberItem
