import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import ReviewSalaryItem from "../../../../components/common/display/items/salary"
import RatingTag from "../../../../components/common/tags/rating"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const GradJobReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  // const contactMethod = data?.contactMethod
  // ? { type: data.contactMethod.type, detail: data.contactMethod.value }
  // : null
  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_gradJob_review_detail`,
      undefined,
      `${id}`
    )
  }, [])

  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        postId={1}
        score={123}
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
        onVote={() => {}}
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <RatingTag rating={5} title="12313" header="搵工難度" />
          <RatingTag rating={5} title="12313" header="前途評估" />
          <ReviewSalaryItem salary={203444} title="平均月薪" />
        </div>
        <DetailReviewInfoContainer
          offerDate="02/2022"
          jobType="Law"
          companyName="123"
          jobSource="123"
          username={null}
          postDate="01/02/23"
          contactMetaData={{ type: "123", detail: "123" }}
          // contact="tg : 123"
        />
      </DetailReviewHeaderContainer>
    </PageLayout>
  )
}

export default GradJobReviewDetailPage
