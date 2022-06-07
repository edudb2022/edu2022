import React from "react";
import BaseCircularBar, { IBaseBaseCircularBarProps } from ".";
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../types/common";

interface IAdmissionScoreCircularBarProps
  extends Partial<IBaseBaseCircularBarProps> {
  admissionType: ADMISSION_TYPE;
  scoreType: SCORE_TYPE;
}

const AdmissionScoreCircularBarProps: React.FunctionComponent<
  IAdmissionScoreCircularBarProps
> = ({ currentValue, maxValue, admissionType, scoreType }) => {
  return (
    <div className="flex flex-col text-center gap-y-1  w-full">
      <div className="text-gray-500 text-xs">{scoreType}</div>
      <BaseCircularBar
        currentValue={currentValue!}
        maxValue={maxValue!}
        pathColor={`rgba(62, 152, 199, ${100 / 100})`}
        trailColor={"#d6d6d6"}
      >
        <h2>{currentValue}</h2>
      </BaseCircularBar>

      <div className="text-gray-500 text-xs">{admissionType}</div>
    </div>
  );
};

export default AdmissionScoreCircularBarProps;
