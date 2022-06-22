import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"

interface IntershipReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  offerDate: string
  salary: number
  id: ID
}

const IntershipReviewDetailCard: React.FunctionComponent<
  IntershipReviewDetailCardProps
> = ({ industry, offerDate, salary, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/internship/${id}`}>
        <a>
          <div className="flex flex-row justify-around">
            <ReviewTextItem detail={industry} title="行業" />
            <ReviewTextItem detail={offerDate} title="offer日期" />
            <ReviewNumberItem detail={salary} title="月薪" />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default IntershipReviewDetailCard
