import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps,
} from "../../groups/cirmularBar/admissionScore"
import ReviewNumberItem from "./items/number"
import ReviewBarTextItem from "./items/number"

interface IAdmissionOfferReviewDetailCardProps
  extends IBaseReviewDetailCardProps {
  label: string
  id: ID
  className?: string
  jupasBestFiveValue: number
  jupasBestSixValue: number
  nonJupasBestGpaValue: number
}

const AdmissionOfferReviewDetailCard: React.FunctionComponent<
  IAdmissionOfferReviewDetailCardProps
> = ({
  jupasBestFiveValue,
  jupasBestSixValue,
  nonJupasBestGpaValue,
  className,
  ...props
}) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex w-full border-2 h-full justify-evenly">
        <ReviewNumberItem detail={23} title="Best 5" />

        <ReviewNumberItem detail={23} title="Best 6" />

        <ReviewNumberItem detail={3.3} title="GPA" />

        <div>
          <div>non jupas</div>
          <div>non jupas</div>
          <div>non jupas</div>
        </div>
      </div>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
