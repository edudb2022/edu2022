import { NextPage } from "next"
import Link from "next/link"
import React from "react"
import ProgrammeReviewDetailCard from "../../../../components/common/cards/reviewDetail/programme"
import SchoolReviewDetailCard from "../../../../components/common/cards/reviewDetail/school"
import BaseRadar from "../../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
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
          <div className="flex flex-row md:w-2/5 ">
            <div className="w-3/5 ">
              <BaseRadar
                scores={[3, 3.6, 3.7, 3.6, 4]}
                labels={["January", "February", "March", "April", "May"]}
              />
            </div>

            <div className="w-2/5  py-12">
              <ReviewRankingCircularBar currentValue={4} color={"red"} />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <CardDisplayLayout>
        <ProgrammeReviewDetailCard
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
