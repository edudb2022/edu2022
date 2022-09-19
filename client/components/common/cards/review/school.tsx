import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import { schoolTypesList } from "../../../../constants/common"
import { SchoolTypeId } from "../../../../types/common"
import BaseRadar from "../../charts/radar"

export interface ISchoolsReviewCardProps extends IBaseReviewCardProps {
  schoolTypeId: SchoolTypeId
  score: number[]
}

const SchoolsReviewCards: React.FunctionComponent<ISchoolsReviewCardProps> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  schoolTypeId,
  type,
  id,
  score
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
          scores={score}
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
