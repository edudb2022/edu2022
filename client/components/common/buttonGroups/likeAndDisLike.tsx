import React from "react"
import DisLikeButton from "../buttons/rating/dislike"
import LikeButton from "../buttons/rating/like"

const LikeAndDisLikeButtonGroup: React.FunctionComponent = () => {
  return (
    <div className="flex flex-row border-black text-2xl p-2">
      <LikeButton /> <DisLikeButton />
    </div>
  )
}

export default LikeAndDisLikeButtonGroup
