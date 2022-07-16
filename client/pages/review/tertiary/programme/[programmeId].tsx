import { NextPage } from "next"
import React from "react"
import ProgrammeReviewDetailCard from "../../../../components/common/cards/reviewDetail/programme"
import BaseRadar from "../../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import RatingTag from "../../../../components/common/tags/rating"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import PageLayout from "../../../../components/layouts/page"

const ProgrammeReviewPage: NextPage = () => {
  return (
    <PageLayout>
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
                labels={["January", "February", "March", "April", "May"]}
              />
            </div>

            <div className="w-2/5  py-12 flex flex-col justify-center items-center">
              <RatingLargeTag title={"red"} rating={4} />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <CardDisplayLayout>
        <ProgrammeReviewDetailCard
          isStudent={true}
          score={1223}
          value={0}
          postDate="20/23"
          label="絕對不建議"
          title="title"
          id="1"
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default ProgrammeReviewPage
