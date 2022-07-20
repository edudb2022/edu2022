import React from "react"
import BaseButton, { IBaseButtonProps } from ".."
import { AiOutlineLike } from "react-icons/ai"

interface ILikeButtonProps extends IBaseButtonProps {}

const LikeButton: React.FunctionComponent<ILikeButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton {...props}>
      <AiOutlineLike />
    </BaseButton>
  )
}

export default LikeButton
