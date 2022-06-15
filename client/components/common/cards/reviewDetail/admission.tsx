import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import AdmissionScoreCircularBarGroup, {
  IAdmissionScoreCircularBarGroupProps,
} from "../../groups/cirmularBar/admissionScore"

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
      <div className="flex justify-center p-0">
        <AdmissionScoreCircularBarGroup
          jupasBestFiveValue={jupasBestFiveValue!}
          jupasBestSixValue={jupasBestSixValue!}
          nonJupasBestFiveValue={nonJupasBestFiveValue!}
          nonJupasBestGpaValue={nonJupasBestGpaValue!}
          className="w-full md:w-1/3 border-2 mx-2 md:gap-x-8"
        />
      </div>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
