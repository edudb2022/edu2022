import { NextPage } from "next"
import React from "react"
import LongQuestionsSection from "../../../../components/common/inputs/sections/longQuestions"
import RatingTag from "../../../../components/common/tags/rating"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"
import useGetSchoolDetailReivew from "../../../../hooks/api/useGetSchoolDetailReview"

const SchoolReviewDetailPage: NextPage = () => {
  const { data } = useGetSchoolDetailReivew({ id: 32 })
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
          <RatingTag rating={4} title="12313" header="學校設施及環境" />
          <RatingTag rating={4} title="12313" header="學校政策" />
          <RatingTag rating={1} title="12313" header="資源及支援" />
          <RatingTag rating={2} title="12313" header="校內膳食" />
          <RatingTag rating={3} title="12313" header="歸屬感" />
        </div>

        <DetailReviewInfoContainer
          admissionYear="2022"
          academicStatus="Year 1"
          username={null}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>

      {/* <LongQuestionsSection title="123" /> */}
    </PageLayout>
  )
}

export default SchoolReviewDetailPage
