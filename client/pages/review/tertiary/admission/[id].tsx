import { NextPage } from "next"
import React from "react"
import AdmissionOfferReviewDetailCard from "../../../../components/common/cards/reviewDetail/admission"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/cirmularBar/admissionScore"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import PageLayout from "../../../../components/layouts/page"

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
            className=" md:w-1/2 w-full"
          />
        </div>
      </ReviewHeaderContainer>
      <CardDisplayLayout>
        <AdmissionOfferReviewDetailCard
          jupasBestFiveValue={23}
          jupasBestSixValue={33}
          nonJupasBestGpaValue={3.3}
          postDate="20/23"
          score={23}
          label="23"
          id="23"
          isStudent={true}
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default AdmissionOfferReviewPage
