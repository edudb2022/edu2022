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
import ReviewTextItem from "../../display/items/text"

interface IAdmissionOfferReviewDetailCardProps
  extends IBaseReviewDetailCardProps {
  label: string
  id: ID
  offerReceivedDate: string
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
  offerReceivedDate,
  ...props
}) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/admission/${id}`}>
        <a>
          <div className="flex md:flex-col w-full h-full justify-evenly ">
            <div className="flex flex-row justify-around  items-center w-full">
              <ReviewTextItem detail={offerReceivedDate} title="收Offer日期" />
              <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_FIVE} />
              <ReviewNumberItem detail={23} title={SCORE_TYPE.BEST_SIX} />
              <ReviewNumberItem detail={3.3} title={SCORE_TYPE.GPA} />
            </div>

            <div className="flex flex-col md:flex-row  items-center md:gap-x-2 gap-y-1 md:mt-2 md:justify-end md:mr-2">
              <TextTag
                title={ADMISSION_TYPE.NON_JUPAS}
                type="admission"
                titleClassName="text-[1px]"
              />
              <TextTag
                title={ADMISSION_OFFER_TYPE.CONDITIONAL}
                titleClassName="text-[1px]"
                type="offer_type"
              />
              <TextTag
                title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
                titleClassName="text-[1px]"
                type="admission_year"
              />
              <TextTag
                title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
                titleClassName="text-[1px]"
                type="year_of_study"
              />
            </div>
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default AdmissionOfferReviewDetailCard
