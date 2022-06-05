import React from "react";
import BaseReviewCard, { IBaseReviewCardProps } from ".";
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../../types/common";
import AdmissionScoreCircularBarProps from "../../circularBar/admissionScore";

interface IAdmissionOfferReviewCardProps extends Partial<IBaseReviewCardProps> {
  jupasBestFiveValue: number;
  jupasBestSixValue: number;
  nonJupasBestFiveValue: number;
  nonJupasBestGpaValue: number;
}
const AdmissionOfferReviewCard: React.FunctionComponent<
  IAdmissionOfferReviewCardProps
> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  id,
  jupasBestFiveValue,
  jupasBestSixValue,
  nonJupasBestFiveValue,
  nonJupasBestGpaValue,
}) => {
  return (
    <BaseReviewCard
      id={id!}
      schoolChineseName={schoolChineseName!}
      schoolEnglishName={schoolEnglishName!}
      schoolShortName={schoolShortName!}
      totalReports={totalReports!}
      type={"OFFER"}
    >
      <div className="flex flex-row justify-around items-center gap-y-2 mt-8">
        <AdmissionScoreCircularBarProps
          admissionType={ADMISSION_TYPE.JUPAS}
          scoreType={SCORE_TYPE.BEST_FIVE}
          currentValue={jupasBestFiveValue}
          maxValue={35}
        />

        <AdmissionScoreCircularBarProps
          admissionType={ADMISSION_TYPE.JUPAS}
          scoreType={SCORE_TYPE.BEST_SIX}
          currentValue={jupasBestSixValue}
          maxValue={42}
        />

        <AdmissionScoreCircularBarProps
          admissionType={ADMISSION_TYPE.NON_JUPAS}
          scoreType={SCORE_TYPE.GPA}
          currentValue={nonJupasBestGpaValue}
          maxValue={4.3}
        />

        <AdmissionScoreCircularBarProps
          admissionType={ADMISSION_TYPE.NON_JUPAS}
          scoreType={SCORE_TYPE.BEST_FIVE}
          currentValue={nonJupasBestFiveValue}
          maxValue={35}
        />
      </div>
    </BaseReviewCard>
  );
};

export default AdmissionOfferReviewCard;
