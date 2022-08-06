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
      <div className="absolute top-0 h-full w-full  px-2 py-5 md:p-4 md:mt-5 ">
        <BaseRadar
          scores={[3, 3.6, 3.7, 3.6, 4]}
          labels={[
            "學校設施及環境",
            "資源及支援",
            "學校政策",
            "校內膳食",
            "歸屬感"
          ]}
        />
      </div>
    </BaseReviewCard>
  )
}

export default SchoolsReviewCards
