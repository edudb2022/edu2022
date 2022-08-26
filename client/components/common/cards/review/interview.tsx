import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import {
  InterviewDifficultyRating,
  InterviewExperienceRating
} from "../../../../constants/rating"

import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps
} from "../../groups/cirmularBar/admissionScore"
import RatingTag from "../../tags/rating"

interface IInterviewOfferReviewCardProps
  extends Partial<IBaseReviewCardProps>,
    IAdmissionScoreCircularBarGroupProps {
  jupasBestFiveValue: number
  jupasBestSixValue: number
  nonJupasBestFiveValue: number
  nonJupasBestGpaValue: number
}

const InterviewReviewCard: React.FunctionComponent<
  IInterviewOfferReviewCardProps
> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  id,
  jupasBestFiveValue,
  jupasBestSixValue,
  nonJupasBestFiveValue,
  nonJupasBestGpaValue
}) => {
  return (
    <BaseReviewCard
      id={id!}
      schoolChineseName={schoolChineseName!}
      schoolEnglishName={schoolEnglishName!}
      schoolShortName={schoolShortName!}
      totalReports={totalReports!}
      type={"面試"}
    >
      <div className="flex flex-row  justify-evenly">
        <RatingTag
          rating={2}
          title={InterviewDifficultyRating[1].label}
          header="面試體驗"
        />
        <RatingTag
          rating={1}
          title={InterviewExperienceRating[0].label}
          header="面試難度"
        />
      </div>

      <AdmissionScoreCircularBarGroup
        jupasBestFiveValue={jupasBestFiveValue}
        jupasBestSixValue={jupasBestSixValue}
        nonJupasBestFiveValue={nonJupasBestFiveValue}
        nonJupasBestGpaValue={nonJupasBestGpaValue}
      />
    </BaseReviewCard>
  )
}

export default InterviewReviewCard
