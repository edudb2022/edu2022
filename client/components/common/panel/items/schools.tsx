import React from "react";
import SchoolCard, { ISchoolCardProps } from "../../cards/school";

interface SchoolsPanelItemsProps {
  index: number;
  currentIndex: number;
  schools: ISchoolCardProps[];
}

const SchoolsPanelItems: React.FunctionComponent<SchoolsPanelItemsProps> = ({
  index,
  currentIndex,
  schools,
}) => {
  return (
    <div className=" w-full flex-wrap flex flex-row ">
      {index === currentIndex &&
        schools.map((data) => {
          return (
            <SchoolCard
              averageSchoolScore={data.averageSchoolScore}
              schoolChineseName={data.schoolChineseName}
              id={data.id}
              schoolEnglishName={data.schoolEnglishName}
              key={data.id}
              shortName={data.shortName}
            />
          );
        })}
    </div>
  );
};

export default SchoolsPanelItems;
