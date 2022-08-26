import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"
import TextTag from "../../tags/text"

interface IntershipReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  offerDate: string
  salary: number
  jotTitle: string
  id: ID
}

const IntershipReviewDetailCard: React.FunctionComponent<
  IntershipReviewDetailCardProps
> = ({ industry, offerDate, salary, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/internship/${id}`}>
        <a>
          <div className="flex flex-row justify-around items-center  mt-2 md:mt-0">
            <ReviewTextItem detail={offerDate} title="offer日期" />
            <ReviewTextItem detail={"課程評價"} title="行業" />
            <ReviewTextItem detail={"123"} title="title" />
            <ReviewNumberItem detail={salary} title="月薪" />

            <div className="flex flex-col justify-center items-center md:flex-row text-xs md:text-base gap-x-12">
              <RatingTag title="課程評價" rating={2} header="搵工難度" />
              <TextTag title="winter" type="winter" header="類型" />
            </div>
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default IntershipReviewDetailCard
