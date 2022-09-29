import { NextPage } from "next"
import React from "react"
import ReviewNumberItem from "../../../../components/common/display/items/number"

import RatingTag from "../../../../components/common/tags/rating"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"
import { SCORE_TYPE } from "../../../../types/common"

const InterviewReviewDetailPage: NextPage = () => {
  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        postId={1}
        score={123}
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <RatingTag rating={1} title="12313" header="面試難度" />
          <RatingTag rating={1} title="12313" header="面試體驗" />
          <TextTag title="year 1" header="類型" type="admission_year" />
        </div>
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <ReviewNumberItem title={SCORE_TYPE.BEST_FIVE} detail={123} />
          <ReviewNumberItem title={SCORE_TYPE.BEST_SIX} detail={123} />
          <ReviewNumberItem title={SCORE_TYPE.GPA} detail={123} />
        </div>

        <DetailReviewInfoContainer
          interviewDate="02/23"
          DressCode="123"
          username={null}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>
    </PageLayout>
  )
}

export default InterviewReviewDetailPage
