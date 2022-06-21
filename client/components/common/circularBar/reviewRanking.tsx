import React, { useEffect, useState } from "react"
import BaseCircularBar from "."
import { rankColor } from "../../../constants/colors"

interface IReviewRankingCircularBar {
  currentValue: number
  title: string
  // color: string
}

const ReviewRankingCircularBar: React.FunctionComponent<
  IReviewRankingCircularBar
> = ({ currentValue, title }) => {
  const color = [
    "text-rating-1-500",
    "text-rating-2-500",
    "text-rating-3-500",
    "text-rating-4-500",
    "text-rating-5-500"
  ]
  return (
    <div className="w-full">
      <BaseCircularBar
        currentValue={currentValue}
        maxValue={5}
        pathColor={rankColor[Math.round(currentValue) - 1]}
        trailColor={"#FAF9F9"}
      >
        <h4>{`${currentValue}/5`}</h4>
        <h6 className={`${color[Math.round(currentValue) - 1]}`}>{title}</h6>
      </BaseCircularBar>
    </div>
  )
}

export default ReviewRankingCircularBar
