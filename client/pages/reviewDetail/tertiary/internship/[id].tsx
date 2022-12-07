import { NextPage } from "next"
import React, { useEffect } from "react"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import PageLayout from "../../../../components/layouts/page"
import ReviewSalaryItem from "../../../../components/common/display/items/salary"
import RatingTag from "../../../../components/common/tags/rating"
import { useRouter } from "next/router"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const IntershipReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_internship_review_detail`,
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
          <TextTag title="summer" type="summer" header="Intern類型" />
          <RatingTag rating={5} title="12313" header="搵工難度" />
          <ReviewSalaryItem salary={203444} title="平均月薪" />
        </div>
        <DetailReviewInfoContainer
          offerDate="02/2022"
          industry="Law"
          companyName="123"
          jobSource="123"
          username={null}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>
    </PageLayout>
  )
}

export default IntershipReviewDetailPage
