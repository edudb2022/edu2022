import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"

interface IProgrammeReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
  admissionDate: string
}

const ProgrammeReviewDetailCard: React.FunctionComponent<
  IProgrammeReviewDetailCardProps
> = ({ value, label, id, admissionDate, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/programme/${id}`}>
        <a>
          <div className="flex flex-row h-full items-center justify-around gap-x-4">
            <ReviewTextItem detail={admissionDate} title="入學日期" />
            <RatingTag rating={2} title={`${label}`} header="推薦指數" />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default ProgrammeReviewDetailCard
