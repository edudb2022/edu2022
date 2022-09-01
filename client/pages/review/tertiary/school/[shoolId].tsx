import React, { useState } from "react"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import SchoolReviewDetailCard from "../../../../components/common/cards/reviewDetail/school"
import BaseRadar from "../../../../components/common/charts/radar"

import SchoolFilterDrawer from "../../../../components/common/drawers/filters/school"
import SchoolFilter from "../../../../components/common/filters/school"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"

import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDsplay"
import PageLayout from "../../../../components/layouts/page"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import qs from "qs"

const SchoolReviewPage = () => {
  const { sorting } = useAppSelector((state) => state.filter.school)
  const word = sorting.split(",")
  console.log("word", word)

  const queryString = qs.stringify({
    order: {
      [word[0]]: word[1]
    },
    limit: 10
  })

  console.log("queryString", queryString)
  const [isOpen, setIsOpen] = useState(false)
  const handleMobileFilterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
  }

  const handleMobileSearch = () => {
    console.log("searhcing")
    setIsOpen(!isOpen)
  }
  return (
    <PageLayout>
      <SchoolFilterDrawer
        isOpen={isOpen}
        onClose={handleMobileFilterOpen}
        onSearchClick={handleMobileSearch}
      />
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
                scores={[1, 2, 3, 4, 5]}
                labels={["January", "February", "March", "April", "May"]}
              />
            </div>

            <div className="w-2/5 flex justify-center items-center py-12">
              <RatingLargeTag title={"red"} rating={1} />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
        <div className="md:grid md:col-span-3 hidden">
          <SchoolFilter onSearch={handleSearch} />
        </div>
        <DetailedCardDetailLayout>
          <SchoolReviewDetailCard
            admissionDate="23/2022"
            isStudent={true}
            score={1223}
            value={0}
            postDate="20/23"
            label="絕對不建議"
            title="title"
            id="1"
          />
        </DetailedCardDetailLayout>
        <StickyBottomButton
          onClick={handleMobileFilterOpen}
          className="md:hidden"
          title="篩選"
        />
      </div>
    </PageLayout>
  )
}

export default SchoolReviewPage
