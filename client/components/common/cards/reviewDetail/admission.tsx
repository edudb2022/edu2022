import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import {
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE,
  ADMISSION_LEVEL_TYPE,
  ID,
  SCORE_TYPE
} from "../../../../types/common"
import TextTag from "../../tags/text"
import ReviewNumberItem from "../../display/items/number"

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
  id,
  ...props
}) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/admission/${id}`}>
        <a>
          <div className="flex w-full h-full justify-evenly">
            <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_FIVE} />

            <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_SIX} />

            <ReviewNumberItem detail={3.3} title={SCORE_TYPE.GPA} />

            <div className="flex flex-col gap-y-1">
              <TextTag title={ADMISSION_TYPE.NON_JUPAS} type="admission" />
              <TextTag
                title={ADMISSION_OFFER_TYPE.CONDITIONAL}
                type="offer_type"
              />
              <TextTag
                title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
                type="admission_year"
              />
            </div>
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
