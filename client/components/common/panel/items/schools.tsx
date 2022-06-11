import Link from "next/link";
import React from "react";
import BaseReviewCard, { IBaseReviewCardProps } from "../../cards/review";
import SchoolsCards from "../../cards/review/schools";

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
            <Link key={data.id} href={`/school/tertiary/${data.id}`}>
              <a key={data.id}>
                <SchoolsCards
                  key={data.id}
                  id={data.id}
                  schoolChineseName={data.schoolChineseName}
                  schoolEnglishName={data.schoolEnglishName}
                  totalReports={data.totalReports}
                  type={data.type}
                  schoolShortName={data.schoolShortName}
                />
              </a>
            </Link>
          );
        })}
    </div>
  );
};

export default SchoolsPanelItems;
