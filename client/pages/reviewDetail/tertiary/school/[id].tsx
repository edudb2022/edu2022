import { NextPage } from "next"
import React from "react"
import LongQuestionsSection from "../../../../components/common/inputs/sections/longQuestions"
import RatingTag from "../../../../components/common/tags/rating"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"

const SchoolReviewDetailPage: NextPage = () => {
  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
      >
        <RatingTag rating={5} title="12313" header="Overall" />
        <div className="flex flex-wrap flex-around w-full border-2">
          <RatingTag rating={4} title="12313" header="Facility" />
          <RatingTag rating={1} title="12313" header="Policy" />
          <RatingTag rating={2} title="12313" header="Resources" />
          <RatingTag rating={3} title="12313" header="Canteen" />
        </div>

        <DetailReviewInfoContainer
          admissionYear="2022"
          academicStatus="Year 1"
          username={null}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>

      <LongQuestionsSection title="123" />
    </PageLayout>
  )
}

export default SchoolReviewDetailPage
