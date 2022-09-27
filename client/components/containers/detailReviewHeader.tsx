import React, { PropsWithChildren, useState } from "react"
import ReviewHeaderContainer, {
  IReviewHeaderContainerProps
} from "./reviewHeader"
import { MdOutlineReportGmailerrorred } from "react-icons/md"
import BaseButton from "../common/buttons"
import LikeAndDisLikeButtonGroup from "../common/groups/button/likeAndDisLike"
import LikeRating, { ILikeRatingProps } from "../common/specical/likeRating"
import { useAppSelector } from "../../hooks/common/useAppSelector"
import { useAppDispatch } from "../../hooks/common/useAppDispatch"
import { ISystemActionTypes } from "../../state/system/actions"
import { useCountUp } from "react-countup"
import VotedModal from "../common/modals/voted"
import { VOTE_TYPE } from "../../types/common"
import { apiService } from "../../utils/api/api"

interface IDetailReviewHeader
  extends IReviewHeaderContainerProps,
    ILikeRatingProps {
  containerClassName?: string
  postId: number
}

const DetailReviewHeaderContainer: React.FunctionComponent<
  PropsWithChildren<IDetailReviewHeader>
> = ({
  children,
  score,
  containerClassName,
  layoutClassName,
  postId,
  ...props
}) => {
  const { isLogin } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  //const isValidUser = isLogin && isVerified
  const isValidUser = isLogin
  const [currtentScore, setCurrentScore] = useState(score)
  const [voteType, setVoteType] = useState<VOTE_TYPE | "">("")
  const [voteTypeModalOpen, setVoteTypeModalOpen] = useState(false)

  const handleLikeClick = async () => {
    if (!isValidUser) {
      dispatch({
        type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
        payload: true
      })
    }

    if (isValidUser && !voteType.length) {
      // setCurrentScore(currtentScore + 1)
      await apiService.postVote({ id: postId, value: 1 })
      console.log("runnnung")
      setVoteType(VOTE_TYPE.LIKED)
    }

    if (isValidUser && voteType.length) {
      setVoteTypeModalOpen(true)
    }
  }

  const handleRightClick = () => {
    if (!isValidUser) {
      dispatch({
        type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
        payload: true
      })
    }

    if (isValidUser && !voteType.length) {
      setCurrentScore(currtentScore - 1)
      setVoteType(VOTE_TYPE.DISLIKE)
    }

    if (isValidUser && voteType.length) {
      setVoteTypeModalOpen(true)
    }
  }

  const handleClick = () => {
    setVoteTypeModalOpen(false)
  }

  return (
    <ReviewHeaderContainer layoutClassName={layoutClassName} {...props}>
      {children}
      <div
        className={`flex flex-row items-center justify-around text-l ${containerClassName}`}
      >
        <VotedModal
          voteType={voteType}
          isOpen={voteTypeModalOpen}
          onClick={handleClick}
        />
        <BaseButton className=" bg-theme-rose-500 text-white gap-x-1 rounded-2xl hover:border-2 hover:animate-warningBorderHover">
          <MdOutlineReportGmailerrorred />
          {"舉報"}
        </BaseButton>

        <LikeRating score={currtentScore} />
        <div>
          <LikeAndDisLikeButtonGroup
            handleLeftClick={handleLikeClick}
            handleRightClick={handleRightClick}
            voteType={voteType}
          />
        </div>
      </div>
    </ReviewHeaderContainer>
  )
}

export default DetailReviewHeaderContainer
