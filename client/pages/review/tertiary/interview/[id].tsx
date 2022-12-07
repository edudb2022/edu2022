import { NextPage } from "next"
import { useRouter } from "next/router"

import React, { useEffect, useState } from "react"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import InterviewReviewDetailCard from "../../../../components/common/cards/reviewDetail/interview"
import InterviewFilterDrawer from "../../../../components/common/drawers/filters/interview"
import InterviewFilter from "../../../../components/common/filters/interview"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/circularBar/admissionScore"
import ReviewDetailSkeletonCardGroup from "../../../../components/common/groups/skeleton/ReviewDetail"
import RatingTag from "../../../../components/common/tags/rating"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDisplay"
import PageLayout from "../../../../components/layouts/page"
import {
  interviewDifficultyRating,
  interviewExperienceRating
} from "../../../../constants/rating"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const InterviewReviewPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(`page_view_interview_review`, undefined, `${id}`)
  }, [])

  const handleMobileFilterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
    trackingEvent.customEvent(`click_search_interview_review`)
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

          <div className="flex flex-row md:flex-col md:w-1/5 w-full  justify-center items-center gap-y-4  gap-x-4 md:h-48 mt-4">
            <RatingTag
              rating={4}
              title={interviewDifficultyRating[2].label}
              header="面試難度"
            />
            <RatingTag
              rating={3.1}
              title={interviewExperienceRating[4].label}
              header="面試體驗"
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
              id={23}
            />
          )}
        </DetailedCardDetailLayout>
      </div>

      <StickyBottomButton
        onClick={handleMobileFilterOpen}
        className="md:hidden"
        title="篩選"
      />
    </PageLayout>
  )
}

export default InterviewReviewPage
