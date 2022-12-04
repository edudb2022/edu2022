import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { CommonHelpers } from "../../../../helpers"
import { ID } from "../../../../types/common"
import ReviewTextItem from "../../display/items/text"
import RatingSmallTag from "../../tags/ratingSmall"

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
  const convertedSalary = CommonHelpers.salaryConvertor(salary)

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
            <ReviewTextItem detail={industry} title="工作類型" />
            <ReviewTextItem detail={convertedSalary} title="年薪" />
          </div>
          <div className="flex flex-row justify-end gap-x-4 items-center mt-2 md:mr-2">
            <RatingSmallTag title="搵工難度" rating={2} />
            <RatingSmallTag title="前途評估" rating={2} />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default GradJobReviewDetailCard
