import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewBarRankItem from "./items/rank"
import ReviewBarTextItem from "./items/number"

interface IGradJobReviewDetailCard extends IBaseReviewDetailCardProps {
  id: ID
}

const GradJobReviewDetailCard: React.FunctionComponent<
  IGradJobReviewDetailCard
> = ({ score }) => {
  return (
    // <BaseReviewDetailCard score={score}>
    //   <div className="flex flex-row justify-around">
    //     <ReviewBarTextItem detail="123" title="行業" />
    //     <ReviewBarTextItem detail="02/23" title="畢業日期" />
    //     <ReviewBarTextItem detail="02/23" title="offer日期" />
    //     <ReviewBarTextItem detail="1123120" title="年薪" />
    //     <ReviewBarRankItem detail="1123120" title="年薪" />
    //   </div>
    // </BaseReviewDetailCard>
    <></>
  )
}

export default GradJobReviewDetailCard
