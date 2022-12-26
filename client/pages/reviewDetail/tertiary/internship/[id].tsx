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
import { CommonCopyRight } from "../../../../utils/copyRight/common"
import { internshipJobFindingDifficultyRating } from "../../../../constants/rating"
import LongQuestionsDisplayLayout from "../../../../components/layouts/longQuestionsDisplay"
import LongTextDisplayContainer from "../../../../components/containers/longTextDisplay"
import { internshipOfferReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"

const InternshipReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetInternshipDetailReview(id as string)
  const userName = data?.anonymous
    ? CommonCopyRight.NOT_WILLING_TO_RESPONSE
    : data?.user.name
  const tags = [data?.program.jupasCode, "實習情報"]
  const baseSalary = data?.baseSalary || 0
  const bonus = data?.bonus || 0
  const stockOptions = data?.stockOptions || 0
  const totalSalary = baseSalary + bonus + stockOptions
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
        score={data?.votes!}
        ChineseTitle={data!.program.chineseName}
        EnglishTitle={data?.program.englishName}
        //schoolShortName={data!.school.shortName.toLowerCase()}
        schoolShortName="hku"
        postId={data!.id}
        title={data!.title}
        additionalInfoTag={tags}
        // onVote={mutate}

        isStudent={!!data?.user.hasSchoolBadge}
        onVote={() => {}}
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full">
          <ReviewSalaryItem salary={totalSalary} title="總月薪" />
          <ReviewSalaryItem salary={baseSalary} title="基本薪金" />
          <ReviewSalaryItem salary={bonus} title="花紅" />
          <ReviewSalaryItem salary={stockOptions} title="股票/股票期权" />
        </div>

        <div className=" flex flex-row flex-wrap justify-around mt-8">
          <RatingTag
            rating={data!.ratingQuestionResponses[0].optionId - 1}
            title={
              internshipJobFindingDifficultyRating.find(
                (val) => val.value == data!.ratingQuestionResponses[0]!.optionId
              )?.label!
            }
            header="搵工難度"
          />
          <TextTag
            header="公司名稱"
            title={data?.companyName!}
            type="admission_year"
          />
          <TextTag
            header="TobType"
            title={data?.companyName!}
            type="admission_year"
          />
        </div>

        <DetailReviewInfoContainer
          //offerDate={data?.offerReceiveDate}
          //jobType={data?.jobType.}
          companyName={data?.companyName}
          jobSource={data?.jobPostSource?.displayText}
          username={userName!}
          postDate={data?.createdAt!}
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>

      <LongQuestionsDisplayLayout>
        {data?.longQuestionResponses.map((data) => {
          return (
            <LongTextDisplayContainer
              title={
                internshipOfferReviewLongQuestionsMapper[data!.questionId]
                  .question
              }
              content={data!.text}
              key={data!.questionId}
            />
          )
        })}
      </LongQuestionsDisplayLayout>
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
export default InternshipReviewDetailPage
