import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import ProgrammeReviewDetailCard from "../../../../components/common/cards/reviewDetail/programme"
import BaseRadar from "../../../../components/common/charts/radar"

import ProgrammeFilterDrawer from "../../../../components/common/drawers/filters/programme"
import ProgrammeFilter from "../../../../components/common/filters/programme"

import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"

import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDisplay"
import PageLayout from "../../../../components/layouts/page"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const ProgrammeReviewPage: NextPage = () => {
  const router = useRouter()
  const { programmeId } = router.query
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(`page_view_programme_review_${programmeId}`)
  }, [])

  const handleMobileFilterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
    trackingEvent.customEvent("click_search_programme_review")
  }

  const handleMobileSearch = () => {
    console.log("searhcing")
    setIsOpen(!isOpen)
  }
  return (
    <PageLayout>
      <ProgrammeFilterDrawer
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
        <div className="md:flex md:justify-center ">
          <div className="flex flex-col justify-center items-center md:flex-row md:w-2/5 ">
            <div className="w-4/5 md:w-3/5 ">
              <BaseRadar
                scores={[3, 3.6, 3.7, 3.6, 4]}
                labels={[
                  "課程結構",
                  "爛龜指數",
                  "爆肝指數",
                  "學習經歷",
                  "資源"
                ]}
              />
            </div>

            <div className="w-2/5  py-12 flex flex-col justify-center items-center">
              <RatingLargeTag title={"red"} rating={4} header="推薦指數" />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20 ">
        <div className="md:grid md:col-span-3 hidden">
          <ProgrammeFilter onSearch={handleSearch} />
        </div>
        <DetailedCardDetailLayout>
          <ProgrammeReviewDetailCard
            admissionDate="02/2022"
            isStudent={true}
            score={1223}
            value={0}
            postDate="20/23"
            label="絕對不建議"
            title="推推推推推推推推推推推推推推推推推推推推推推推推推"
            id={2}
          />
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

export default ProgrammeReviewPage
