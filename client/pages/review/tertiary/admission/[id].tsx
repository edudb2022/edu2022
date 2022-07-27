import { NextPage } from "next"
import React, { useState } from "react"
import BaseButton from "../../../../components/common/buttons"
import AdmissionOfferReviewDetailCard from "../../../../components/common/cards/reviewDetail/admission"
import AdmissionFilterDrawer from "../../../../components/common/drawers/filters/admission"
import AdmissionFilter from "../../../../components/common/filters/admission"
import AdmissionScoreCircularBarGroup from "../../../../components/common/groups/cirmularBar/admissionScore"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"
import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDsplay"
import PageLayout from "../../../../components/layouts/page"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"

const AdmissionOfferReviewPage: NextPage = () => {
  const state = useAppSelector((state) => state.filter.admission)
  const [isOpen, setIsOpen] = useState(false)
  const hanldeMobileFliterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
  }

  const handleMobileSeach = () => {
    console.log("searhcing")
    setIsOpen(!isOpen)
  }

  return (
    <PageLayout>
      <AdmissionFilterDrawer
        isOpen={isOpen}
        onClose={hanldeMobileFliterOpen}
        onSearchClick={handleMobileSeach}
      />
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

      <div className="md:grid md:grid-cols-12 gap-x-4">
        <div className="md:grid md:col-span-3 hidden">
          <AdmissionFilter onSearch={handleSearch} />
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

      <BaseButton
        onClick={hanldeMobileFliterOpen}
        className="bg-theme-one-500 text-white fixed bottom-0 w-full rounded-none flex justify-center md:hidden"
      >
        <h2>Filter</h2>
      </BaseButton>
    </PageLayout>
  )
}

export default AdmissionOfferReviewPage
