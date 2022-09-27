import React, { MouseEventHandler } from "react"
import { VOTE_TYPE } from "../../../../types/common"
import DisLikeButton from "../../buttons/rating/dislike"
import LikeButton from "../../buttons/rating/like"

interface ILikeAndDisLikeButtonGroupProps {
  handleLikeClick: MouseEventHandler<HTMLButtonElement>
  handleRightClick: MouseEventHandler<HTMLButtonElement>
  voteType: VOTE_TYPE | ""
}

const LikeAndDisLikeButtonGroup: React.FunctionComponent<
  ILikeAndDisLikeButtonGroupProps
> = ({ handleLikeClick, handleRightClick, voteType }) => {
  return (
    <div className="flex flex-row border-black text-2xl p-2">
      <LikeButton
        onClick={handleLikeClick}
        className={`${voteType === VOTE_TYPE.LIKED && "text-theme-teal-700"}`}
      />
      <DisLikeButton
        onClick={handleRightClick}
        className={`${voteType === VOTE_TYPE.DISLIKE && "text-theme-rose-700"}`}
      />
    </div>
  )
}

export default LikeAndDisLikeButtonGroup
