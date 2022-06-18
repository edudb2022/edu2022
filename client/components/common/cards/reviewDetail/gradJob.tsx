import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewBarRankItem from "./items/rank"
import ReviewTextItem from "./items/text"

interface IGradJobReviewDetailCard extends IBaseReviewDetailCardProps {
  industry: string
  gradDate: string
  id: ID
}

const GradJobReviewDetailCard: React.FunctionComponent<
  IGradJobReviewDetailCard
> = ({ ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex flex-row justify-around">
        <ReviewTextItem detail="123" title="行業" />
        <ReviewTextItem detail="02/23" title="畢業日期" />
        <ReviewTextItem detail="02/23" title="offer日期" />
        <ReviewTextItem detail="1123120" title="年薪" />
      </div>
    </BaseReviewDetailCard>
  )
}

export default GradJobReviewDetailCard
