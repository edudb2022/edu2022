import React, { PropsWithChildren } from "react"
import BaseCard from ".."
import StudentIcon from "../../icons/student"
import LikeRating, { ILikeRatingProps } from "../../specical/likeRating"

export interface IBaseReviewDetailCardProps extends ILikeRatingProps {
  title?: string
  postDate: string
  isStudent: boolean
}

const BaseReviewDetailCard: React.FunctionComponent<
  PropsWithChildren<IBaseReviewDetailCardProps>
> = ({ children, score, postDate, title, isStudent }) => {
  return (
    <BaseCard
      className={`w-full flex flex-col h-fit rounded-lg border-theme-one-100  border md:p-4  p-2 `}
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="w-4/5 md:w-9/10 h-fit flex flex-row gap-x-2 ">
          {title && <h1 className="truncate">{title}</h1>}
          {isStudent && (
            <h1>
              <StudentIcon />
            </h1>
          )}
        </div>
        <p className="w-1/5  md:w-1/10 text-xs md:text-base md:text-center text-end h-full  ">
          <span>發布日期 {postDate}</span>
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="w-9/10">{children}</div>
        <div className="w-1/10 flex items-center justify-center  ">
          <LikeRating score={score} />
        </div>
      </div>
    </BaseCard>
  )
}

export default BaseReviewDetailCard
