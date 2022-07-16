import { NextPage } from "next"
import React from "react"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import PageLayout from "../../../../components/layouts/page"
import CountUp from "react-countup"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import GradJobReviewDetailCard from "../../../../components/common/cards/reviewDetail/gradJob"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import RatingTag from "../../../../components/common/tags/rating"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"

const GradJobReviewPage: NextPage = () => {
  return (
    <PageLayout>
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
            <RatingLargeTag title={"hope"} rating={1} header={"hope"} />
            <RatingLargeTag
              title={"difficulty"}
              rating={1}
              header={"difficulty"}
            />
          </div>
        </div>
      </ReviewHeaderContainer>

      <CardDisplayLayout>
        <GradJobReviewDetailCard
          offerDate="02/23"
          industry="123"
          isStudent={true}
          postDate="04/22"
          score={33}
          key={1}
          title="The worse offer ever"
          id="1"
          salary={2400000}
          gradDate="20/23"
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default GradJobReviewPage
