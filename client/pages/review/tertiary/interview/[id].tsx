import { NextPage } from "next"

import React from "react"
import InterviewReviewDetailCard from "../../../../components/common/cards/reviewDetail/interview"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/cirmularBar/admissionScore"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import PageLayout from "../../../../components/layouts/page"
import { difficultyRating, gpaRating } from "../../../../constants/rating"

const InterviewReviewPage: NextPage = () => {
  return (
    <PageLayout>
      <ReviewHeaderContainer
        ChineseTitle={"計量金融學及風險管理科學"}
        EnglishTitle={"Quantitative Finance and Risk Management Science"}
        ShortTitle={"HKu"}
        schoolShortName={"hku"}
      >
        <div className="flex flex-col  md:flex-row justify-center items-center md:items-end  w-full gap-x-4">
          <AdmissionScoreCircularBarGroup
            jupasBestFiveValue={12}
            jupasBestSixValue={33}
            nonJupasBestFiveValue={12}
            nonJupasBestGpaValue={3.2}
            className=" md:w-1/3 w-full "
          />
          <div className="flex flex-row md:w-1/5 w-1/2  gap-x-4 justify-center items-center  mb-2">
            <ReviewRankingCircularBar
              currentValue={3.1}
              title={gpaRating[4].label}
            />

            <ReviewRankingCircularBar
              currentValue={4}
              title={difficultyRating[2].label}
            />
          </div>
        </div>
      </ReviewHeaderContainer>

      <CardDisplayLayout>
        <InterviewReviewDetailCard
          interviewDate="02/23"
          industry="123"
          isStudent={true}
          postDate="04/22"
          score={33}
          key={1}
          title="1123"
          id="1"
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default InterviewReviewPage
