import { NextPage } from "next"

import React, { useState } from "react"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import InterviewReviewDetailCard from "../../../../components/common/cards/reviewDetail/interview"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import InterviewFilterDrawer from "../../../../components/common/drawers/filters/interview"
import InterviewFilter from "../../../../components/common/filters/interview"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/cirmularBar/admissionScore"
import ReviewDetailSkeletonCardGroup from "../../../../components/common/groups/skeleton/ReviewDetail"
import ReviewDetailSkeletonCard from "../../../../components/common/skeleton/card/reviewDetail"
import RatingTag from "../../../../components/common/tags/rating"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDsplay"
import PageLayout from "../../../../components/layouts/page"
import {
  InterviewDifficultyRating,
  InterviewExperienceRating,
  programmeGpaRating
} from "../../../../constants/rating"

const InterviewReviewPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMobileFilterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
  }

  const handleMobileSearch = () => {
    console.log("searhcing")
    setIsOpen(!isOpen)
  }

  const isLoading = false

  return (
    <PageLayout>
      <InterviewFilterDrawer
        isOpen={isOpen}
        onClose={handleMobileFilterOpen}
        onSearchClick={handleMobileSearch}
      />
      <ReviewHeaderContainer
        ChineseTitle={"計量金融學及風險管理科學"}
        EnglishTitle={"Quantitative Finance and Risk Management Science"}
        ShortTitle={"HKu"}
        schoolShortName={"hku"}
      >
        <div className="flex flex-col  md:flex-row justify-center items-center md:items-end  w-full gap-x-4 ">
          <AdmissionScoreCircularBarGroup
            jupasBestFiveValue={12}
            jupasBestSixValue={33}
            nonJupasBestFiveValue={12}
            nonJupasBestGpaValue={3.2}
            className=" md:w-1/3 w-full "
          />

          <div className="flex flex-row md:flex-col md:w-1/5 w-full  justify-center items-center gap-y-4  md:h-48 ">
            <RatingTag
              rating={3.1}
              title={InterviewExperienceRating[4].label}
              header="面試體驗"
            />
            <RatingTag
              rating={4}
              title={InterviewDifficultyRating[2].label}
              header="面試難度"
            />
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
        <div className="md:grid md:col-span-3 hidden">
          <InterviewFilter onSearch={handleSearch} />
        </div>
        <DetailedCardDetailLayout>
          {isLoading ? (
            <ReviewDetailSkeletonCardGroup />
          ) : (
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
          )}
        </DetailedCardDetailLayout>
      </div>

      <StickyBottomButton
        onClick={handleMobileFilterOpen}
        className="md:hidden"
        title="filter"
      />
    </PageLayout>
  )
}

export default InterviewReviewPage
