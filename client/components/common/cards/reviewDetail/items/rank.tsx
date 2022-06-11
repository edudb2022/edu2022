import React from "react"

interface IReviewBarRankItemProps {
  title: string
  detail: string
}

const ReviewBarRankItem: React.FunctionComponent<IReviewBarRankItemProps> = ({
  title,
  detail,
}) => {
  return (
    <div className="border-2">
      <p>{title}</p>
      <h6>{detail}</h6>
    </div>
  )
}

export default ReviewBarRankItem
