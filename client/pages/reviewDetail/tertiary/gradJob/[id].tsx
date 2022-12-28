import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { dehydrate, QueryClient } from "react-query"
import ReviewSalaryItem from "../../../../components/common/display/items/salary"
import RatingTag from "../../../../components/common/tags/rating"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import LongTextDisplayContainer from "../../../../components/containers/longTextDisplay"
import LongQuestionsDisplayLayout from "../../../../components/layouts/longQuestionsDisplay"

import PageLayout from "../../../../components/layouts/page"
import {
  gradJobHopeRating,
  gradJobJobFindingDifficultyRating
} from "../../../../constants/rating"
import useGetGradJobDetailReview from "../../../../hooks/api/useGetGradJobReview"
import { gradJobOfferOfferReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"
import { apiService } from "../../../../utils/api/api"
import { CommonCopyRight } from "../../../../utils/copyRight/common"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const GradJobReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetGradJobDetailReview(id as string)

  const userName = data?.anonymous
    ? CommonCopyRight.NOT_WILLING_TO_RESPONSE
    : data?.user.name

  const honor =
    data?.honor.displayText || CommonCopyRight.NOT_WILLING_TO_RESPONSE

  const contactMethod = data?.contactMethod
    ? { type: data.contactMethod.type, detail: data.contactMethod.value }
    : null

  const baseSalary = data?.baseSalary || 0
  const bonus = data?.bonus || 0
  const stockOptions = data?.stockOptions || 0
  const totalSalary = baseSalary + bonus + stockOptions

  const tags = [data?.program.jupasCode, "工作情報"]

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
        score={data?.votes!}
        ChineseTitle={data!.program.chineseName}
        EnglishTitle={data?.program.englishName}
        //schoolShortName={data!.school.shortName.toLowerCase()}
        schoolShortName="thei"
        postId={data!.id}
        title={data!.title}
        additionalInfoTag={tags}
        // onVote={mutate}
        isStudent={!!data?.user.hasSchoolBadge}
        onVote={() => {}}
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full">
          <ReviewSalaryItem salary={totalSalary} title="總年薪" />
          <ReviewSalaryItem salary={baseSalary} title="基本薪金" />
          <ReviewSalaryItem salary={bonus} title="花紅" />
          <ReviewSalaryItem salary={stockOptions} title="股票/股票期权" />
        </div>

        <div className=" flex flex-row flex-wrap justify-around mt-8">
          <RatingTag
            rating={data!.ratingQuestionResponses[0].optionId - 1}
            title={
              gradJobJobFindingDifficultyRating.find(
                (val) => val.value == data!.ratingQuestionResponses[0]!.optionId
              )?.label!
            }
            header="搵工難度"
          />

          <RatingTag
            rating={data!.ratingQuestionResponses[1].optionId - 1}
            title={
              gradJobHopeRating.find(
                (val) => val.value == data!.ratingQuestionResponses[1]!.optionId
              )?.label!
            }
            header="前途評估"
          />

          <TextTag
            header="公司名稱"
            title={data?.companyName!}
            type="admission_year"
          />
          <TextTag
            header="工作類型"
            title={data?.companyName!}
            type="admission_year"
          />
        </div>

        <DetailReviewInfoContainer
          offerDate={data?.offerReceiveDate}
          companyName={data?.companyName}
          jobSource={data?.jobPostSource?.displayText}
          username={userName!}
          postDate={data?.createdAt!}
          contactMetaData={contactMethod}
          honor={honor}
        />
      </DetailReviewHeaderContainer>

      <LongQuestionsDisplayLayout>
        {data?.longQuestionResponses.map((data) => {
          return (
            <LongTextDisplayContainer
              title={
                gradJobOfferOfferReviewLongQuestionsMapper[data!.questionId]
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
    ["gradJob-detail-review", { id: id }],
    apiService.getGradJobDetailReview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default GradJobReviewDetailPage
