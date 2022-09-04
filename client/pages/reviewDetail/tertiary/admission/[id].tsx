import { NextPage } from "next"
import React from "react"
import ReviewNumberItem from "../../../../components/common/display/items/number"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import {
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE,
  ADMISSION_LEVEL_TYPE,
  SCORE_TYPE
} from "../../../../types/common"

const AdmissionReviewDetailPage: NextPage = () => {
  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle="Worse ever !"
        // EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="hku"
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <TextTag
            title={ADMISSION_TYPE.NON_JUPAS}
            type="admission"
            header="入學類型"
          />
          <TextTag
            title={ADMISSION_OFFER_TYPE.CONDITIONAL}
            type="offer_type"
            header="Offer類型"
          />
          <TextTag
            title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
            type="admission_year"
            header="入學年級"
          />
          <TextTag
            title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
            type="year_of_study"
            header="現時學業年級"
          />
        </div>

        <div className="flex flex-wrap flex-row justify-evenly  w-full border-2">
          <ReviewNumberItem detail={123} title={SCORE_TYPE.BEST_FIVE} />
          <ReviewNumberItem detail={123} title={SCORE_TYPE.BEST_SIX} />
          <ReviewNumberItem detail={123} title={SCORE_TYPE.GPA} />
        </div>

        <DetailReviewInfoContainer
          offerDate="02/23"
          currentProgramme="213"
          currentSchool="123"
          username={null}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>
    </PageLayout>
  )
}

export default AdmissionReviewDetailPage
