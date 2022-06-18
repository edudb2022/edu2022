import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import { difficultyRating } from "../../../../constants/rating"
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../../types/common"
import CardDisplayLayout from "../../../layouts/cardDisplay"
import AdmissionScoreCircularBarProps from "../../circularBar/admissionScore"
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps
} from "../../groups/cirmularBar/admissionScore"
import RankingTag from "../../tags/ranking"

interface IAdmissionOfferReviewCardProps
  extends Partial<IBaseReviewCardProps>,
    IAdmissionScoreCircularBarGroupProps {}
const AdmissionOfferReviewCard: React.FunctionComponent<
  IAdmissionOfferReviewCardProps
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
      type={"OFFER"}
    >
      <div className="flex flex-row justify-center">
        <RankingTag
          ranking={1}
          title={difficultyRating[0].label}
          className="border-2"
        />
        <RankingTag
          ranking={1}
          title={difficultyRating[0].label}
          className="border-2"
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

export default AdmissionOfferReviewCard
