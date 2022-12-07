import React, { useEffect, useState } from "react"
import StickyBottomButton from "../../../../components/common/buttons/stickyBottom"
import SchoolReviewDetailCard from "../../../../components/common/cards/reviewDetail/school"
import BaseRadar from "../../../../components/common/charts/radar"

import SchoolFilterDrawer from "../../../../components/common/drawers/filters/school"
import SchoolFilter from "../../../../components/common/filters/school"
import RatingLargeTag from "../../../../components/common/tags/ratingLarge"
import ReviewHeaderContainer from "../../../../components/containers/reviewHeader"

import DetailedCardDetailLayout from "../../../../components/layouts/cards/detailCardDisplay"
import PageLayout from "../../../../components/layouts/page"
import { useAppSelector } from "../../../../hooks/common/useAppSelector"
import qs from "qs"
import BaseInfiniteScroll from "../../../../components/common/infiniteScroll"
import shortid from "shortid"
import { Router, useRouter } from "next/router"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const SchoolReviewPage = () => {
  const router = useRouter()
  const { schoolId } = router.query
  const { sorting } = useAppSelector((state) => state.filter.school)
  const word = sorting.split(",")

  const queryString = qs.stringify({
    order: {
      [word[0]]: word[1]
    },
    limit: 10
  })

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_school_review`,
      undefined,
      `${schoolId}`
    )
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const handleMobileFilterOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = () => {
    console.log("searhcing")
    trackingEvent.customEvent(`search_click_school_review`)
  }

  const handleMobileSearch = () => {
    console.log("searhcing")
    setIsOpen(!isOpen)
  }

  const [mockList, setMockList] = useState([{ id: 1 }])
  const [hasMore, setHasMore] = useState(true)
  const fetchMoreData = () => {
    if (mockList.length >= 500) {
      setHasMore(false)
      return
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      const ID = Math.random()
      setMockList(
        mockList.concat([
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID },
          { id: ID }
        ])
      )
    }, 500)
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
                labels={[
                  "學校設施及環境",
                  "資源及支援",
                  "學校政策",
                  "校內膳食",
                  "歸屬感"
                ]}
              />
            </div>

            <div className="w-2/5 flex justify-center items-center py-12">
              <RatingLargeTag title={"red"} rating={1} header="推薦指數" />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <div className="md:grid md:grid-cols-12 gap-x-4 mt-20">
        <div className="md:grid md:col-span-3 hidden">
          <SchoolFilter onSearch={handleSearch} />
        </div>
        <DetailedCardDetailLayout>
          <BaseInfiniteScroll
            dataLength={mockList.length}
            fetchMoreData={fetchMoreData}
            hasMore={hasMore}
          >
            <div className="flex flex-col gap-y-4">
              {mockList.map((data) => {
                return (
                  <SchoolReviewDetailCard
                    admissionDate="23/2022"
                    isStudent={true}
                    score={1223}
                    value={0}
                    postDate="20/23"
                    label="絕對不建議"
                    title="title"
                    id={data.id}
                    key={data.id}
                  />
                )
              })}
            </div>
          </BaseInfiniteScroll>
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
