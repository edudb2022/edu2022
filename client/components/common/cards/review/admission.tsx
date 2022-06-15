import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../../types/common"
import AdmissionScoreCircularBarProps from "../../circularBar/admissionScore"
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps,
} from "../../groups/cirmularBar/admissionScore"

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
  nonJupasBestGpaValue,
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
