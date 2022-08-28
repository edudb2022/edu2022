import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"

interface ISchoolReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
  admissionDate: string
}

const SchoolReviewDetailCard: React.FunctionComponent<
  ISchoolReviewDetailCardProps
> = ({ value, label, id, admissionDate, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/school/${id}`}>
        <a>
          <div className="flex flex-col-reverse md:flex-row h-full items-center justify-around gap-x-4">
            <ReviewTextItem detail={admissionDate} title="入學日期" />
            <RatingTag rating={2} title={`${label}`} header="推薦指數" />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default SchoolReviewDetailCard
