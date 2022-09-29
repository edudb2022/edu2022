import React from "react"
import { VoteTypeId } from "../../../types/common"
import DisLikeButton from "../buttons/rating/dislike"
import LikeButton from "../buttons/rating/like"
import SingleButtonModal, { ISingleButtonModalProps } from "./singleButton"

interface IVotedModalProps extends Partial<ISingleButtonModalProps> {
  voteType: VoteTypeId | undefined
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
          {voteType === VoteTypeId.LIKED && (
            <LikeButton className="text-theme-teal-700 animate-bounceVertical" />
          )}

          {voteType === VoteTypeId.DISLIKE && (
            <DisLikeButton className="text-theme-rose-700  animate-bounceVertical" />
          )}
        </span>

        {voteType === VoteTypeId.LIKED && <h6>你已正評了！</h6>}

        {voteType === VoteTypeId.DISLIKE && <h6>你已負評了！</h6>}
      </div>
    </SingleButtonModal>
  )
}

export default VotedModal
