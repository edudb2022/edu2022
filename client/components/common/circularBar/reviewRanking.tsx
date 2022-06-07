import React from "react";
import BaseCircularBar from ".";

interface IReviewRankingCircularBar {
  currentValue: number;
  color: string;
}

const ReviewRankingCircularBar: React.FunctionComponent<
  IReviewRankingCircularBar
> = ({ currentValue, color }) => {
  return (
    <BaseCircularBar
      currentValue={2}
      maxValue={5}
      pathColor={color}
      trailColor={"#d6d6d6"}
    >
      <h2>{`${currentValue}/5`}</h2>
      <h2 className={`text-${color}-500`}>{`on99`}</h2>
    </BaseCircularBar>
  );
};

export default ReviewRankingCircularBar;
