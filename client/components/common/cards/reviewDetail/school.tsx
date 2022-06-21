import { Rating } from "@mui/material"
import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import RatingTag from "../../tags/rating"
import RantingTag from "../../tags/rating"

interface ISchoolReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
}

const SchoolReviewDetailCard: React.FunctionComponent<
  ISchoolReviewDetailCardProps
> = ({ value, label, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/school/${id}`}>
        <a>
          <div className="flex flex-col-reverse md:flex-row h-full items-center justify-center gap-x-4">
            <RatingTag rating={2} title={`${label}`} />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default SchoolReviewDetailCard
