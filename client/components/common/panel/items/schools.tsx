import React from "react";
import BaseReviewCard, { IBaseReviewCardProps } from "../../cards/reviewCard";

interface SchoolsPanelItemsProps {
  index: number;
  currentIndex: number;
  schools: IBaseReviewCardProps[];
}

const SchoolsPanelItems: React.FunctionComponent<SchoolsPanelItemsProps> = ({
  index,
  currentIndex,
  schools,
}) => {
  return (
    <div className=" w-full flex-wrap flex flex-row gap-y-6 gap-x-12 ">
      {index === currentIndex &&
        schools.map((data) => {
          return (
            <BaseReviewCard
              id={data.id}
              schoolChineseName={data.schoolChineseName}
              schoolEnglishName={data.schoolEnglishName}
              totalReports={data.totalReports}
              schoolTypes={data.schoolTypes}
              schoolShortName={data.schoolShortName}
            >
              123
            </BaseReviewCard>
          );
        })}
    </div>
  );
};

export default SchoolsPanelItems;
