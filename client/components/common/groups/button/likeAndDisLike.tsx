import React from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import { ISystemActionTypes } from "../../../../state/system/actions"
import DisLikeButton from "../../buttons/rating/dislike"
import LikeButton from "../../buttons/rating/like"

const LikeAndDisLikeButtonGroup: React.FunctionComponent = () => {
  const { isLogin, isVerified } = useAppSelector((state) => state.user)
  const dispatch = useDispatch()
  const isValidUser = isLogin && isVerified

  const handleLikeClick = () => {
    if (!isValidUser) {
      dispatch({
        type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
        payload: true
      })
    }
  }

  const handleRightClick = () => {
    if (!isValidUser) {
      dispatch({
        type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
        payload: true
      })
    }
  }

  return (
    <div className="flex flex-row border-black text-2xl p-2">
      <LikeButton onClick={handleLikeClick} className="text-theme-teal-700" />
      <DisLikeButton
        onClick={handleRightClick}
        className="text-theme-rose-700"
      />
    </div>
  )
}

export default LikeAndDisLikeButtonGroup
