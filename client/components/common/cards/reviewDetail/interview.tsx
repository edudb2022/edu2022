import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID, SCORE_TYPE } from "../../../../types/common"
import ReviewNumberItem from "./items/number"
import ReviewTextItem from "./items/text"

interface IInterviewReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  interviewDate: string
  id: ID
}

const InterviewReviewDetailCard: React.FunctionComponent<
  IInterviewReviewDetailCardProps
> = ({ industry, interviewDate, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex flex-row justify-around">
        <ReviewTextItem detail={interviewDate} title="面試日期" />
        <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_FIVE} />
        <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_SIX} />
        <ReviewNumberItem detail={3.3} title={SCORE_TYPE.GPA} />
        <ReviewTextItem detail={"123"} title="面試難度" />
      </div>
    </BaseReviewDetailCard>
  )
}

export default InterviewReviewDetailCard