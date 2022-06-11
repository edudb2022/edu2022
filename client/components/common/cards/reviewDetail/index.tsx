import React, { PropsWithChildren } from "react"
import BaseCard from ".."
import LikeRating, { ILikeRatingProps } from "../../specical/likeRating"

export interface IBaseReviewDetailCardProps extends ILikeRatingProps {}

const BaseReviewDetailCard: React.FunctionComponent<
  PropsWithChildren<IBaseReviewDetailCardProps>
> = ({ children, score }) => {
  return (
    <BaseCard className="w-full border-2 flex flex-col h-fit p-2">
      <h1>title</h1>
      <div className="flex flex-row border-2">
        <div className="w-4/5">{children}</div>
        <div className="w-1/5 border-2">
          <LikeRating score={score} />
        </div>
      </div>
    </BaseCard>
  )
}

export default BaseReviewDetailCard
