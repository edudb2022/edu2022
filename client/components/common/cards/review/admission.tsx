import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps
} from "../../groups/cirmularBar/admissionScore"
import ReviewDetailSkeletonCard from "../../skeleton/card/reviewDetail"

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
