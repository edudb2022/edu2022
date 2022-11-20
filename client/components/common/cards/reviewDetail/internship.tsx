import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"
import TextTag from "../../tags/text"

interface InternshipReviewDetailCardProps extends IBaseReviewDetailCardProps {
  industry: string
  offerDate: string
  salary: number
  jotTitle: string
  id: ID
}

const InternshipReviewDetailCard: React.FunctionComponent<
  InternshipReviewDetailCardProps
> = ({ industry, offerDate, salary, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/internship/${id}`}>
        <a>
          <div>
            <span className="text-gray-400"> 職位名稱 :</span>
            <span> Senior software enigner</span>
          </div>

          <div className="flex flex-row justify-around items-center  mt-2 md:mt-0">
            <ReviewTextItem detail={offerDate} title="offer日期" />
            <ReviewTextItem detail={"課程評價"} title="工作類型" />
            <ReviewNumberItem detail={salary} title="月薪" />
          </div>
          <div className="flex flex-row justify-end md:mr-2 gap-x-4 items-center">
            <RatingTag title="課程評價" rating={2} />
            <TextTag title="winter" type="winter" />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default InternshipReviewDetailCard
