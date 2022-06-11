import React from "react"
import BaseRadar from "../../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../../components/common/circularBar/reviewRanking"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"

const SchoolReviewPage = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full md:w-9/10">
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
                  scores={[1, 2, 3, 4, 5]}
                  labels={["January", "February", "March", "April", "May"]}
                />
              </div>

              <div className="w-2/5  py-12">
                <ReviewRankingCircularBar currentValue={4} color={"red"} />
              </div>
            </div>
          </div>
        </ReviewHeaderContainer>
      </div>
    </div>
  )
}

export default SchoolReviewPage
