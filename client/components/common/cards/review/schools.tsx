import React from "react";

import BaseReviewCard, { IBaseReviewCardProps } from ".";

import BaseRadar from "../../charts/radar";

interface ISchoolsCardsProps extends IBaseReviewCardProps {}

const SchoolsCards: React.FunctionComponent<ISchoolsCardsProps> = ({
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
      type={type}
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

export default SchoolsCards;
