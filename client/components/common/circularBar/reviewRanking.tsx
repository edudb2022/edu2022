import React from "react"
import BaseCircularBar from "."
import { rankColor } from "../../../constants/colors"

interface IReviewRankingCircularBar {
  currentValue: number
  title: string
}

const ReviewRankingCircularBar: React.FunctionComponent<
  IReviewRankingCircularBar
> = ({ currentValue, title }) => {
  const value = Math.round(currentValue) - 1
  const color = [
    "text-rating-1-500",
    "text-rating-2-500",
    "text-rating-3-500",
    "text-rating-4-500",
    "text-rating-5-500",
    "text-rating-6-500"
  ]
  return (
    <div className="w-full">
      <BaseCircularBar
        currentValue={currentValue - 1}
        maxValue={5}
        pathColor={rankColor[value]}
        trailColor={"#FAF9F9"}
      >
        <h4>{`${value}/5`}</h4>
        <h6 className={`${color[value]}`}>{title}</h6>
      </BaseCircularBar>
    </div>
  )
}

export default ReviewRankingCircularBar
