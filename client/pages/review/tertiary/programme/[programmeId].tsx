import { NextPage } from "next"
import React, { useState } from "react"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import ProgrammeReviewDetailCard from "../../../../components/common/cards/reviewDetail/programme"
import BaseRadar from "../../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import ProgrammeFilterDrawer from "../../../../components/common/drawers/filters/programme"
import ProgrammeFilter from "../../../../components/common/filters/programme"
import RatingTag from "../../../../components/common/tags/rating"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDsplay"
import PageLayout from "../../../../components/layouts/page"

const ProgrammeReviewPage: NextPage = () => {
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
              <RatingLargeTag title={"red"} rating={4} />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
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
            title="title"
            id="1"
          />
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

export default ProgrammeReviewPage
