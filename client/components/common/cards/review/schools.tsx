import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import BaseRadar from "../../charts/radar"

interface ISchoolsCardsProps extends IBaseReviewCardProps {}

const SchoolsReviewCards: React.FunctionComponent<ISchoolsCardsProps> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  type,
  id
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
      <div className="absolute top-0 h-full w-full  px-8 py-5 md:p-4 md:mt-5 ">
        <BaseRadar
          scores={[3, 3.6, 3.7, 3.6, 4]}
          labels={["January", "February", "March", "April", "May"]}
        />
      </div>
    </BaseReviewCard>
  )
}

export default SchoolsReviewCards
