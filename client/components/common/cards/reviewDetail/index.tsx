import Link from "next/link"
import React, { PropsWithChildren } from "react"
import BaseCard from ".."
import LikeRating, { ILikeRatingProps } from "../../specical/likeRating"

export interface IBaseReviewDetailCardProps extends ILikeRatingProps {
  title: string
  postDate: string
}

const BaseReviewDetailCard: React.FunctionComponent<
  PropsWithChildren<IBaseReviewDetailCardProps>
> = ({ children, score, postDate, title }) => {
  return (
    <BaseCard
      className={`w-full mx-2  flex flex-col h-fit p-2  border-b-2 border-black `}
    >
      <div className="flex flex-row">
        <h1 className="w-4/5 h-fit">{title}</h1>
        <p className="w-1/5 text-center h-full  ">
          <span>發布日期 {postDate}</span>
        </p>
      </div>

      <div className="flex flex-row ">
        <div className="w-4/5">{children}</div>
        <div className="w-1/5 border-l-2 border-black flex items-center justify-center">
          <LikeRating score={score} />
        </div>
      </div>
    </BaseCard>
  )
}

export default BaseReviewDetailCard
