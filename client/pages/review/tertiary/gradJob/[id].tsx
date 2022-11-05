import { NextPage } from "next"
import React, { useState } from "react"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import PageLayout from "../../../../components/layouts/page"
import CountUp from "react-countup"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import GradJobReviewDetailCard from "../../../../components/common/cards/reviewDetail/gradJob"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import RatingTag from "../../../../components/common/tags/rating"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import GradJobDrawer from "../../../../components/common/drawers/filters/gradJob"
import GradJobFilter from "../../../../components/common/filters/gradJob"
import GradJobFilterDrawer from "../../../../components/common/drawers/filters/gradJob"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import InternshipFilter from "../../../../components/common/filters/internship"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDisplay"

const GradJobReviewPage: NextPage = () => {
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
      <GradJobFilterDrawer
        isOpen={isOpen}
        onClose={handleMobileFilterOpen}
        onSearchClick={handleMobileSearch}
      />
      <ReviewHeaderContainer
        ChineseTitle={"計量金融學及風險管理科學"}
        EnglishTitle={"Quantitative Finance and Risk Management Science"}
        ShortTitle={"internship"}
        schoolShortName={"hku"}
      >
        <div className="flex flex-col md:flex-row w-full justify-center gap-x-12 items-center ">
          <div className="text-center mt-4 md:mt-0">
            <h6 className="text-gray-500">平均年薪</h6>
            <h1>
              <CountUp
                start={0}
                end={240000}
                duration={1}
                separator=","
                suffix="HKD"
              />
            </h1>
          </div>

          <div className="w-1/2 md:w-1/6 flex flex-row gap-x-6  justify-center items-center">
            <RatingLargeTag
              title={"difficulty"}
              rating={1}
              header={"搵工難度"}
            />
            <RatingLargeTag title={"hope"} rating={1} header={"前途評估"} />
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
        <div className="md:grid md:col-span-3 hidden">
          <GradJobFilter onSearch={handleSearch} />
        </div>

        <DetailedCardDetailLayout>
          <GradJobReviewDetailCard
            offerDate="02/23"
            industry="123"
            isStudent={true}
            postDate="04/22"
            score={33}
            key={1}
            title="The worse offer ever"
            id="1"
            salary={258019}
            gradDate="20/23"
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

export default GradJobReviewPage
