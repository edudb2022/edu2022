import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewNumberItem from "./items/number"
import ReviewTextItem from "./items/text"

interface IGradJobReviewDetailCard extends IBaseReviewDetailCardProps {
  industry: string
  gradDate: string
  id: ID
  offerDate: string
  salary: number
}

const GradJobReviewDetailCard: React.FunctionComponent<
  IGradJobReviewDetailCard
> = ({ industry, gradDate, offerDate, salary, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex flex-row justify-around">
        <ReviewTextItem detail={industry} title="行業" />
        <ReviewTextItem detail={gradDate} title="畢業日期" />
        <ReviewTextItem detail={offerDate} title="offer日期" />
        <ReviewNumberItem detail={salary} title="年薪" />
      </div>
    </BaseReviewDetailCard>
  )
}

export default GradJobReviewDetailCard
