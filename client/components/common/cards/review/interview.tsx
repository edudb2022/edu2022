import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import { difficultyRating } from "../../../../constants/rating"

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
        <RatingTag rating={2} title={difficultyRating[1].label} />
        <RatingTag rating={1} title={difficultyRating[0].label} />
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
