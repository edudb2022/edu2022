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
            {/* <Rating name="read-only" value={value} readOnly className="text-5xl" /> */}
            <RatingTag
              rating={3}
              title={`${label}`}
              // className="text-2xl font-black"
              // ratingClassName="text-semi border-4"
            />
            {/* <h1>{label}</h1> */}
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default ProgrammeReviewDetailCard
