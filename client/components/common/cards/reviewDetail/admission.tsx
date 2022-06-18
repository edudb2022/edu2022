import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
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
        <ReviewNumberItem detail={23} title="Best 5" />

        <ReviewNumberItem detail={23} title="Best 6" />

        <ReviewNumberItem detail={3.3} title="GPA" />

        <div className="flex flex-col gap-y-1">
          <BaseTag title="Jupas" className="bg-purple-200 text-purple-900" />
          <BaseTag title="Direct" className="bg-blue-200 text-blue-900" />
          <BaseTag title="Year 1" className="bg-teal-200 text-teal-900" />
        </div>
      </div>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
