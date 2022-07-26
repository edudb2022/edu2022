import { NextPage } from "next"
import React from "react"
import SearchButton from "../../../../components/common/buttons/search"
import AdmissionOfferReviewDetailCard from "../../../../components/common/cards/reviewDetail/admission"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/cirmularBar/admissionScore"
import AdmissionFilterGroup from "../../../../components/common/groups/filter/admission"
import ReviewSelect from "../../../../components/common/inputs/select/review"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../../components/layouts/cardDisplay"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDsplay"
import PageLayout from "../../../../components/layouts/page"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"

const AdmissionOfferReviewPage: NextPage = () => {
  const state = useAppSelector((state) => state.filter.admission)
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

      <div className="flex flex-row">
        <ReviewSelect className="ring-none outline-none" />
        <SearchButton />
      </div>
      {/* <CardDisplayLayout> */}

      <div className="grid grid-cols-12 gap-x-4">
        <div className="grid col-span-3 border-2 ">
          <AdmissionFilterGroup />
        </div>
        <DetailedCardDetailLayout>
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
        </DetailedCardDetailLayout>
      </div>

      {/* </CardDisplayLayout> */}
    </PageLayout>
  )
}

export default AdmissionOfferReviewPage
