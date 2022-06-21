import { NextPage } from "next"
import React from "react"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import PageLayout from "../../../../components/layouts/page"
import CountUp from "react-countup"
import InternshipPeiChart from "../../../../components/common/charts/pie/internship"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import GradJobReviewDetailCard from "../../../../components/common/cards/reviewDetail/gradJob"
import IntershipReviewDetailCard from "../../../../components/common/cards/reviewDetail/intership"

const IntershipReviewPage: NextPage = () => {
  return (
    <PageLayout>
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
        </div>
      </ReviewHeaderContainer>

      <CardDisplayLayout>
        <IntershipReviewDetailCard
          offerDate="02/23"
          industry="123"
          isStudent={true}
          postDate="04/22"
          score={33}
          key={1}
          title="1123"
          id="1"
          salary={1232123}
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default IntershipReviewPage
