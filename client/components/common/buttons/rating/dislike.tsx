import React from "react"
import BaseButton, { IBaseButtonProps } from ".."
import { AiOutlineDislike } from "react-icons/ai"

interface IDisLikeButtonProps extends IBaseButtonProps {}
const DisLikeButton: React.FunctionComponent<IDisLikeButtonProps> = ({
  ...props
}) => {
  return (
    <BaseButton {...props}>
      <AiOutlineDislike />
    </BaseButton>
  )
}

export default DisLikeButton
