import React from "react"
import BaseReviewCard, { IBaseReviewCardProps } from "."
import BaseRadar from "../../charts/radar"

interface IProgrammeReviewCard extends Partial<IBaseReviewCardProps> {}

const ProgrammeReviewCard: React.FunctionComponent<IProgrammeReviewCard> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  id
}) => {
  return (
    <BaseReviewCard
      id={id!}
      schoolChineseName={schoolChineseName!}
      schoolEnglishName={schoolEnglishName!}
      schoolShortName={schoolShortName!}
      totalReports={totalReports!}
      type={"Review"}
    >
      <div className="absolute top-0 h-full w-full  px-8 py-4 md:p-4 ">
        <BaseRadar
          scores={[1, 2, 3, 4, 5]}
          labels={["課程結構", "爛龜指數", "爆肝指數", "學習經歷", "資源"]}
        />
      </div>
    </BaseReviewCard>
  )
}

export default ProgrammeReviewCard
