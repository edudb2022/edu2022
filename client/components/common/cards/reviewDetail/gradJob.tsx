import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { CommonHelpers } from "../../../../helpers"
import { ID } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"
import RatingTag from "../../tags/rating"
import RatingSmallTag from "../../tags/ratingSmall"
import TextTag from "../../tags/text"

interface IGradJobReviewDetailCard extends IBaseReviewDetailCardProps {
  industry: string
  gradDate: string
  id: ID
  offerDate: string
  salary: number
}

const GradJobReviewDetailCard: React.FunctionComponent<
  IGradJobReviewDetailCard
> = ({ industry, gradDate, offerDate, salary, id, ...props }) => {
  const contervedSalary = CommonHelpers.salaryConvertor(salary)

  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/gradJob/${id}`}>
        <a>
          <div>
            <span className="text-gray-400"> 職位名稱 :</span>
            <span> Senior software enigner</span>
          </div>

          <div className="flex flex-row justify-around">
            <ReviewTextItem detail={gradDate} title="畢業日期" />

            <ReviewTextItem detail={offerDate} title="offer日期" />
            <ReviewTextItem detail={industry} title="行業" />
            <ReviewTextItem detail={contervedSalary} title="年薪" />
            {/* <ReviewNumberItem detail={salary} title="年薪" /> */}
          </div>
          <div className="flex flex-row justify-start gap-x-4 items-center mt-2">
            <RatingSmallTag title="搵工難度" rating={2} />
            <RatingSmallTag title="前途評估" rating={2} />
            {/* <RatingTag title="課程評價" rating={2} />

            <RatingTag title="課程評價" rating={2} /> */}
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default GradJobReviewDetailCard
