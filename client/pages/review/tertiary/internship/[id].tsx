import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import PageLayout from "../../../../components/layouts/page"
import CountUp from "react-countup"
import InternshipPeiChart from "../../../../components/common/charts/pie/internship"

import InternshipReviewDetailCard from "../../../../components/common/cards/reviewDetail/internship"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import InternshipFilter from "../../../../components/common/filters/internship"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDisplay"
import InternshipFilterDrawer from "../../../../components/common/drawers/filters/internship"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import { useRouter } from "next/router"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const InternshipReviewPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(`page_view_internship_review_${id}`)
  }, [])

  const handleMobileFilterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
    trackingEvent.customEvent(`click_search_internship_review`)
  }

  const handleMobileSearch = () => {
    console.log("searhcing")
    setIsOpen(!isOpen)
  }

  return (
    <PageLayout>
      <InternshipFilterDrawer
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
            <RatingLargeTag title="diffcukty" rating={3} header="搵工難度" />
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
        <div className="md:grid md:col-span-3 hidden">
          <InternshipFilter onSearch={handleSearch} />
        </div>

        <DetailedCardDetailLayout>
          <InternshipReviewDetailCard
            jotTitle="123"
            offerDate="02/23"
            industry="123"
            isStudent={true}
            postDate="04/22"
            score={10000}
            key={1}
            title="1123"
            id={1}
            salary={1232123}
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

export default InternshipReviewPage
