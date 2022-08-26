import { NextPage } from "next"
import React, { useState } from "react"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import PageLayout from "../../../../components/layouts/page"
import CountUp from "react-countup"
import InternshipPeiChart from "../../../../components/common/charts/pie/internship"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import IntershipReviewDetailCard from "../../../../components/common/cards/reviewDetail/intership"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import RatingTag from "../../../../components/common/tags/rating"
import IntershipFilter from "../../../../components/common/filters/internship"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDsplay"
import IntershipFilterDrawer from "../../../../components/common/drawers/filters/internship"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"

const IntershipReviewPage: NextPage = () => {
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
      <IntershipFilterDrawer
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
        <div className="flex flex-col md:flex-row justify-around items-center md:mx-80">
          <div>
            <InternshipPeiChart statistic={[1, 3, 4]} />
          </div>

          <div className="flex flex-row justify-center items-center gap-x-4">
            <div className="flex flex-col justify-center items-center w-full ">
              <h6 className="text-gray-500">平均月薪</h6>
              <h1>
                <CountUp
                  start={0}
                  end={123213}
                  duration={1}
                  separator=","
                  suffix="HKD"
                />
              </h1>
            </div>
            <RatingTag title="diffcukty" rating={3} header="搵工難度" />
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
        <div className="md:grid md:col-span-3 hidden">
          <IntershipFilter onSearch={handleSearch} />
        </div>

        <DetailedCardDetailLayout>
          <IntershipReviewDetailCard
            jotTitle="123"
            offerDate="02/23"
            industry="123"
            isStudent={true}
            postDate="04/22"
            score={10000}
            key={1}
            title="1123"
            id="1"
            salary={1232123}
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

export default IntershipReviewPage
