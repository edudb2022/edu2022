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
      // className={`w-full flex flex-col h-fit p-2  border-b-2  border-black md:border-gray-100 md:hover:animate-borderGrayDeep`}
      className={`w-full flex flex-col h-fit border-b-2 p-2 rounded-md border-theme-one-100`}
    >
      <div className="flex flex-row">
        <div className="w-4/5 h-fit flex flex-row gap-x-2 ">
          {title && <h1>{title}</h1>}
          {isStudent && (
            <h1>
              <StudentIcon />
            </h1>
          )}
        </div>
        <p className="w-1/5 text-xs md:text-base text-center h-full  ">
          <span>發布日期 {postDate}</span>
        </p>
      </div>

      <div className="flex flex-row ">
        <div className="w-4/5">{children}</div>
        <div className="w-1/5 border-l-2 border-gray-200 flex items-center justify-center ">
          <LikeRating score={score} />
        </div>
      </div>
    </BaseCard>
  )
}

export default BaseReviewDetailCard
