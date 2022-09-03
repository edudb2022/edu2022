import { NextPage } from "next"
import React from "react"
import RatingTag from "../../../../components/common/tags/rating"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"

const ProgrammeReviewDetailPage: NextPage = () => {
  // labels={[
  //   "課程結構",
  //   "爛龜指數",
  //   "爆肝指數",
  //   "學習經歷",
  //   "資源"
  // ]}
  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <RatingTag rating={5} title="12313" header="推薦指數" />
          <RatingTag rating={4} title="12313" header="課程結構" />
          <RatingTag rating={2} title="12313" header="爛龜指數" />
          <RatingTag rating={3} title="12313" header="爆肝指數" />
          <RatingTag rating={3} title="12313" header="學習經歷" />
          <RatingTag rating={3} title="12313" header="資源" />
        </div>

        <DetailReviewInfoContainer
          admissionYear="2022"
          academicStatus="Year 1"
          username={null}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>
    </PageLayout>
  )
}

export default ProgrammeReviewDetailPage
