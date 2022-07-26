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
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
      >
        {/* <RatingTag rating={5} title="12313" header="Overall" />
        <div className="flex flex-wrap flex-around w-full border-2">
          <RatingTag rating={4} title="12313" header="Facility" />
          <RatingTag rating={1} title="12313" header="Policy" />
          <RatingTag rating={2} title="12313" header="Resources" />
          <RatingTag rating={3} title="12313" header="Canteen" />
        </div> */}

        <TextTag title={ADMISSION_TYPE.NON_JUPAS} type="admission" />
        <TextTag title={ADMISSION_OFFER_TYPE.CONDITIONAL} type="offer_type" />
        <TextTag title={ADMISSION_LEVEL_TYPE.FIVE_PLUS} type="admission_year" />

        <ReviewNumberItem detail={123} title={SCORE_TYPE.BEST_FIVE} />
        <ReviewNumberItem detail={123} title={SCORE_TYPE.BEST_SIX} />
        <ReviewNumberItem detail={123} title={SCORE_TYPE.GPA} />

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
