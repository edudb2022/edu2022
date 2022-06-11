import React from "react"

interface IReviewBarItemProps {
  title: string
  detail: string
}

const ReviewBarTextItem: React.FunctionComponent<IReviewBarItemProps> = ({
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

export default ReviewBarTextItem
