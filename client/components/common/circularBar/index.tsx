import React, { Children, PropsWithChildren } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

export interface IBaseBaseCircularBarProps {
  currentValue: number;
  maxValue: number;
  pathColor: string;
  trailColor: string;
  children?: React.ReactNode;
}

const BaseCircularBar: React.FunctionComponent<IBaseBaseCircularBarProps> = ({
  currentValue,
  maxValue,
  pathColor,
  trailColor,
  children,
}) => {
  return (
    // <div className="flex flex-col text-center gap-y-5">
    //   <div className="text-gray-500 text-base">DSE</div>
    <CircularProgressbarWithChildren
      value={currentValue}
      maxValue={maxValue}
      styles={buildStyles({
        rotation: 1,
        pathTransitionDuration: 0.5,
        pathColor: pathColor,
        trailColor: trailColor,
      })}
    >
      {children}
      <h2>{currentValue}</h2>
    </CircularProgressbarWithChildren>
  );
};

export default BaseCircularBar;
