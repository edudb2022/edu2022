import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { programmeGpaRating } from "../../../../constants/rating"
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"
import TextTag from "../../tags/text"

interface IInterviewReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  interviewDate: string
  id: number
}

const InterviewReviewDetailCard: React.FunctionComponent<
  IInterviewReviewDetailCardProps
> = ({ industry, interviewDate, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/interview/${id}`}>
        <a>
          <div className="w-full flex flex-row justify-around">
            <ReviewTextItem
              detail={interviewDate}
              title="面試日期"
              className="text-sm"
            />
            <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_FIVE} />
            <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_SIX} />
            <ReviewNumberItem detail={3.3} title={SCORE_TYPE.GPA} />

            <div>
              <RatingTag
                rating={3.1}
                title={programmeGpaRating[4].label}
                header="面試難度"
              />

              <TextTag
                title={ADMISSION_TYPE.NON_JUPAS}
                type="admission"
                header="類型"
              />
            </div>
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default InterviewReviewDetailCard
