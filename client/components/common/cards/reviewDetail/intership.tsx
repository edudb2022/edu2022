import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewNumberItem from "./items/number"
import ReviewTextItem from "./items/text"

interface IntershipReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  offerDate: string
  salary: number
  id: ID
}

const IntershipReviewDetailCard: React.FunctionComponent<
  IntershipReviewDetailCardProps
> = ({ industry, offerDate, salary, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex flex-row justify-around">
        <ReviewTextItem detail={industry} title="行業" />
        <ReviewTextItem detail={offerDate} title="offer日期" />
        <ReviewNumberItem detail={salary} title="月薪" />
      </div>
    </BaseReviewDetailCard>
  )
}

export default IntershipReviewDetailCard
