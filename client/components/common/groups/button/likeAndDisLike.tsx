import React, { MouseEventHandler } from "react"
import { VoteTypeId } from "../../../../types/common"
import DisLikeButton from "../../buttons/rating/dislike"
import LikeButton from "../../buttons/rating/like"

interface ILikeAndDisLikeButtonGroupProps {
  handleLeftClick: MouseEventHandler<HTMLButtonElement>
  handleRightClick: MouseEventHandler<HTMLButtonElement>
  voteType: VoteTypeId | undefined
}

const LikeAndDisLikeButtonGroup: React.FunctionComponent<
  ILikeAndDisLikeButtonGroupProps
> = ({ handleLeftClick, handleRightClick, voteType }) => {
  return (
    <div className="flex flex-row border-black text-2xl p-2">
      <LikeButton
        onClick={handleLeftClick}
        className={`${voteType === VoteTypeId.LIKED && "text-theme-teal-700"}`}
      />
      <DisLikeButton
        onClick={handleRightClick}
        className={`${
          voteType === VoteTypeId.DISLIKE && "text-theme-rose-700"
        }`}
      />
    </div>
  )
}

export default LikeAndDisLikeButtonGroup
