import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { CommonHelpers } from "../../../../helpers"
import { ID } from "../../../../types/common"
import ReviewNumberItem from "../../display/items/number"
import ReviewTextItem from "../../display/items/text"

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
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default GradJobReviewDetailCard
