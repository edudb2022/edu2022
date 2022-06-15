import { NextPage } from "next"
import React from "react"
import AdmissionScoreCircularBarProps from "../../../../components/common/circularBar/admissionScore"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/cirmularBar/admissionScore"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import PageLayout from "../../../../components/layouts/page"
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../../types/common"

const AdmissionOfferReviewPage: NextPage = () => {
  return (
    <PageLayout>
      <ReviewHeaderContainer
        ChineseTitle={"計量金融學及風險管理科學"}
        EnglishTitle={"Quantitative Finance and Risk Management Science"}
        ShortTitle={"INterview"}
        schoolShortName={"hku"}
      >
        <div className="flex justify-center w-full ">
          <AdmissionScoreCircularBarGroup
            jupasBestFiveValue={12}
            jupasBestSixValue={33}
            nonJupasBestFiveValue={12}
            nonJupasBestGpaValue={3.2}
            className=" md:w-1/2"
          />
        </div>
      </ReviewHeaderContainer>
    </PageLayout>
  )
}

export default AdmissionOfferReviewPage
