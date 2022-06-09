import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CountUp from "react-countup";

export interface ILikeRatingProps {
  score: number;
}

const LikeRating: React.FunctionComponent<ILikeRatingProps> = ({ score }) => {
  return (
    <div className="flex flex-col justify-center items-center font-medium ">
      <IoIosArrowUp />
      <CountUp start={0} end={score} duration={1} separator="," />

      <IoIosArrowDown />
    </div>
  );
};

export default LikeRating;
