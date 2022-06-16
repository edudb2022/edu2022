import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps,
} from "../../groups/cirmularBar/admissionScore"
import ReviewBarTextItem from "./items/number"

interface IAdmissionOfferReviewDetailCardProps
  extends IBaseReviewDetailCardProps,
    IAdmissionScoreCircularBarGroupProps {
  label: string
  id: ID
  className?: string
}

const AdmissionOfferReviewDetailCard: React.FunctionComponent<
  IAdmissionOfferReviewDetailCardProps
> = ({
  jupasBestFiveValue,
  jupasBestSixValue,
  nonJupasBestGpaValue,
  nonJupasBestFiveValue,
  className,
  ...props
}) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex"></div>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
