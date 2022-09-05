import React from "react"
import { VOTE_TYPE } from "../../../types/common"
import DisLikeButton from "../buttons/rating/dislike"
import LikeButton from "../buttons/rating/like"
import ErrorIcon from "../icons/error"
import SingleButtonModal, { ISingleButtonModalProps } from "./singleButton"

interface IVotedModalProps extends Partial<ISingleButtonModalProps> {
  voteType: VOTE_TYPE
}

const VotedModal: React.FunctionComponent<IVotedModalProps> = ({
  isOpen,
  voteType,
  ...props
}) => {
  return (
    <SingleButtonModal
      buttonTitle="OK !"
      isOpen={isOpen!}
      buttonClassName="bg-gray-300 text-white"
      className=" h-48 w-80 md:h-56 md:w-96 "
      {...props}
    >
      <div className="flex flex-col justify-center items-center h-40">
        <span className="text-8xl">
          {voteType === VOTE_TYPE.LIKED && (
            <LikeButton className="text-theme-teal-700 animate-bounceVertical" />
          )}

          {voteType === VOTE_TYPE.DISLIKE && (
            <DisLikeButton className="text-theme-rose-700  animate-bounceVertical" />
          )}
        </span>

        {voteType === VOTE_TYPE.LIKED && <h6>你已正評了！</h6>}

        {voteType === VOTE_TYPE.DISLIKE && <h6>你已負評了！</h6>}
      </div>
    </SingleButtonModal>
  )
}

export default VotedModal
