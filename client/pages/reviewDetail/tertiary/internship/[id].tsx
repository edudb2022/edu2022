import { GetServerSideProps, NextPage } from "next"
import React, { useEffect } from "react"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import PageLayout from "../../../../components/layouts/page"
import ReviewSalaryItem from "../../../../components/common/display/items/salary"
import RatingTag from "../../../../components/common/tags/rating"
import { useRouter } from "next/router"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"
import useGetInternshipDetailReview from "../../../../hooks/api/useGetIntershipReview"
import { dehydrate, QueryClient } from "react-query"
import { apiService } from "../../../../utils/api/api"

const IntershipReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetInternshipDetailReview(id as string)
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
        score={0}
        ChineseTitle={data!.title}
        //schoolShortName={data!.school.shortName.toLowerCase()}
        schoolShortName="hku"
        postId={data!.id}
        title={data!.title}
        // additionalInfoTag={tags}
        // onVote={mutate}
        isStudent={!!data?.user.hasSchoolBadge}
        onVote={() => {}}
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full">
          {/* <TextTag
            title={data?.internshipType.displayText!}
            type="summer"
            header="Intern類型"
          /> */}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ["internship-detail-review", { id: id }],
    apiService.getInternshipDetailReview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
export default IntershipReviewDetailPage
