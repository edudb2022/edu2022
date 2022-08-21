import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import {
  InterviewDifficultyRating,
  programmeGpaRating
} from "../../../../constants/rating"
import { ADMISSION_TYPE, ID, SCORE_TYPE } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"
import TextTag from "../../tags/text"

interface IInterviewReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  interviewDate: string
  id: ID
}

const InterviewReviewDetailCard: React.FunctionComponent<
  IInterviewReviewDetailCardProps
> = ({ industry, interviewDate, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/interview/${id}`}>
        <a>
          <div className="flex flex-row justify-around items-center">
            <ReviewTextItem detail={interviewDate} title="面試日期" />
            <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_FIVE} />
            <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_SIX} />
            <ReviewNumberItem detail={3.3} title={SCORE_TYPE.GPA} />

            {/* <div className="flex flex-col justify-center items-center"> */}
            <div className="flex flex-col md:flex-row md:text-md gap-x-2 justify-center items-center">
              <div className="flex  gap-x-2">
                <RatingTag
                  rating={3.1}
                  title={programmeGpaRating[4].label}
                  header="面試難度"
                />
                <div className="hidden md:flex">
                  <RatingTag
                    rating={4}
                    title={InterviewDifficultyRating[2].label}
                    header="exp"
                  />
                </div>
              </div>

              <div className="mt-0 md:mt-4">
                <TextTag title={ADMISSION_TYPE.NON_JUPAS} type="admission" />
              </div>
            </div>
            {/* <TextTag title={ADMISSION_TYPE.NON_JUPAS} type="admission" /> */}
            {/* </div> */}
            {/* <ReviewTextItem detail={"123"} title="面試難度" /> */}
            {/* <ReviewTextItem detail={"123"} title="exp" /> */}
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default InterviewReviewDetailCard
