import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import {
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE,
  ADMISSION_YEAR_TYPE,
  ID,
  SCORE_TYPE
} from "../../../../types/common"
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps
} from "../../groups/cirmularBar/admissionScore"
import BaseTag from "../../tags"
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
      <div className="flex w-full h-full justify-evenly">
        <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_FIVE} />

        <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_SIX} />

        <ReviewNumberItem detail={3.3} title={SCORE_TYPE.GPA} />

        <div className="flex flex-col gap-y-1">
          <BaseTag
            title={ADMISSION_TYPE.NON_JUPAS}
            className="bg-purple-200 text-purple-900"
          />
          <BaseTag
            title={ADMISSION_OFFER_TYPE.CONDITIONAL}
            className="bg-blue-200 text-blue-900"
          />
          <BaseTag
            title={ADMISSION_YEAR_TYPE.FIVE_PLUS}
            className="bg-teal-200 text-teal-900"
          />
        </div>
      </div>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
