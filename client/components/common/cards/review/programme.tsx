import React from "react";
import BaseReviewCard, { IBaseReviewCardProps } from ".";
import BaseRadar from "../../charts/radar";

interface IProgrammeReviewCard extends IBaseReviewCardProps {}

const ProgrammeReviewCard: React.FunctionComponent<IProgrammeReviewCard> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  type,
  id,
}) => {
  return (
    <BaseReviewCard
      id={id}
      schoolChineseName={schoolChineseName}
      schoolEnglishName={schoolEnglishName}
      schoolShortName={schoolShortName}
      totalReports={totalReports}
      type={"Review"}
    >
      <div className="absolute top-0 h-full w-full  px-8 py-4 md:p-4 ">
        <BaseRadar
          scores={[1, 2, 3, 4, 5]}
          labels={["January", "February", "March", "April", "May"]}
        />
      </div>
    </BaseReviewCard>
  );
};

export default ProgrammeReviewCard;
