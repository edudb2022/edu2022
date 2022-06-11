import { NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import { FiArrowRight } from "react-icons/fi"
import BaseButton from "../../../components/common/buttons"
import ProgrammeCard from "../../../components/common/cards/programme"
import BaseRadar from "../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../components/common/circularBar/reviewRanking"
import DetailReviewHeader from "../../../components/containers/detailReviewHeader"
import ReviewHeaderContainer from "../../../components/containers/reviewHeader"

const TertiarySchoolPage: NextPage = (props) => {
  const router = useRouter()
  const { schoolId } = router.query
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

              <div className="w-2/5   py-12">
                <ReviewRankingCircularBar currentValue={4} color={"red"} />
                <BaseButton className=" w-full justify-center gap-x-2  text-sm md:text-base mt-4 bg-theme-one-500 text-white">
                  <span>更多學校評價</span>
                  <FiArrowRight />
                </BaseButton>
              </div>
            </div>
          </div>

          <div>
            <h1>Faculty</h1>
          </div>

          <div>
            <ProgrammeCard
              programmeChineseName="123"
              programmeEnglishName="123"
              programmeId="123"
              totalReports={123}
              programmeType="123"
              programmeShortName="123"
            />
          </div>
        </ReviewHeaderContainer>
      </div>
    </div>
  )
}

export default TertiarySchoolPage
