import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import RatingTag from "../../tags/rating"

interface IProgrammeReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
}

const ProgrammeReviewDetailCard: React.FunctionComponent<
  IProgrammeReviewDetailCardProps
> = ({ value, label, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/programme/${id}`}>
        <a>
          <div className="flex flex-col-reverse md:flex-row h-full items-center justify-center gap-x-4">
            <RatingTag rating={3} title={`${label}`} />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default ProgrammeReviewDetailCard
