import dayjs from "dayjs"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { dehydrate, QueryClient } from "react-query"
import RatingTag from "../../../../components/common/tags/rating"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import LongTextDisplayContainer from "../../../../components/containers/longTextDisplay"
import LongQuestionsDisplayLayout from "../../../../components/layouts/longQuestionsDisplay"
import SEO from "../../../../components/seo"
import PageLayout from "../../../../components/layouts/page"

import {
  schoolCafeteriaRating,
  schoolCampusRating,
  schoolPolicyRating,
  schoolRecommendRating,
  schoolResourcesRating,
  schoolSenseOfBelongingRating
} from "../../../../constants/rating"

import useGetSchoolDetailReview from "../../../../hooks/api/useGetSchoolDetailReview"
import { schoolReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"
import { schoolReviewRatingQuestionsMapper } from "../../../../mappers/ratingQuestions"
import { apiService } from "../../../../utils/api/api"
import useVoteSchoolReview from "../../../../hooks/api/vote/useVoteSchoolReview"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"
import { CommonCopyRight } from "../../../../utils/copyRight/common"
import { SITENAME, WEB_ORIGIN } from "../../../../constants/common"

const SchoolReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetSchoolDetailReview(id as string)
  const { mutate } = useVoteSchoolReview()

  const contactMethod = data?.contactMethod
    ? { type: data.contactMethod.type, detail: data.contactMethod.value }
    : null

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_school_review_detail`,
      undefined,
      `${id}`
    )
  }, [])

  const campusRating = {
    rating: data!.ratingQuestionResponses[0].optionId - 1,
    title: schoolCampusRating.find(
      (val) => val.value == data!.ratingQuestionResponses[0]!.optionId
    )?.label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[0].questionId
      ].question
  }
  const resourceRating = {
    rating: data!.ratingQuestionResponses[1].optionId - 1,
    title: schoolResourcesRating.find(
      (val) => val.value == data!.ratingQuestionResponses[1]!.optionId
    )?.label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[1].questionId
      ].question
  }
  const policyRating = {
    rating: data!.ratingQuestionResponses[2].optionId - 1,
    title: schoolPolicyRating.find(
      (val) => val.value == data!.ratingQuestionResponses[2]!.optionId
    )?.label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[2].questionId
      ].question
  }
  const cafeteriaRating = {
    rating: data!.ratingQuestionResponses[3].optionId - 1,
    title: schoolCafeteriaRating.find(
      (val) => val.value == data!.ratingQuestionResponses[3]!.optionId
    )?.label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[3].questionId
      ].question
  }

  const senseOfBelongingRating = {
    rating: data!.ratingQuestionResponses[4].optionId - 1,
    title: schoolSenseOfBelongingRating.find(
      (val) => val.value == data!.ratingQuestionResponses[4]!.optionId
    )?.label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[4].questionId
      ].question
  }

  const recommendationRating = {
    rating: data!.ratingQuestionResponses[5].optionId - 1,
    title: schoolRecommendRating.find(
      (val) => val.value == data!.ratingQuestionResponses[5]!.optionId
    )?.label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[5].questionId
      ].question
  }
  const academicStatus =
    data?.academicStatus || CommonCopyRight.NOT_WILLING_TO_RESPONSE

  const userName = data?.anonymous
    ? CommonCopyRight.NOT_WILLING_TO_RESPONSE
    : data?.user.name

  const tags = [
    data?.school.type.displayText,
    data?.school.shortName,
    "學校評價"
  ]

  return (
    <>
      <SEO
        title={data!.title}
        //description="Bachelor of Management Science and Information Management (Honours)"
        openGraph={{
          title: data!.title,
          //description:
          //"Bachelor of Management Science and Information Management (Honours)",
          url: `${WEB_ORIGIN}${router.asPath}`,
          site_name: SITENAME,
          article: {
            authors: [
              data?.user.name || CommonCopyRight.NOT_WILLING_TO_RESPONSE
            ],
            publishedTime: data?.createdAt,
            tags: [
              data!.title,
              "HKUST",
              "Hong Kong University of Science and Technology",
              "應用及人本計算學（榮譽）文學士",
              "Bachelor of Management Science and Information Management (Honours)",
              "課程結構",
              "爛龜指數",
              "爆肝指數",
              "學習經歷",
              "資源"
            ]
          }
        }}
      />
      <PageLayout>
        <DetailReviewHeaderContainer
          score={data!.votes}
          ChineseTitle={data!.title}
          schoolShortName={data!.school.shortName.toLowerCase()}
          postId={data!.id}
          title={data!.title}
          additionalInfoTag={tags}
          onVote={mutate}
          isStudent={!!data?.user.hasSchoolBadge}
          // isStudent={data?.user.}
        >
          <div className="grid md:grid-cols-6 grid-cols-3 place-items-center  mt-4 gap-4">
            <RatingTag
              rating={campusRating.rating}
              title={campusRating.title!}
              header={campusRating.header}
            />
            <RatingTag
              rating={resourceRating.rating}
              title={resourceRating.title!}
              header={resourceRating.header}
            />
            <RatingTag
              rating={policyRating.rating}
              title={policyRating.title!}
              header={policyRating.header}
            />
            <RatingTag
              rating={cafeteriaRating.rating}
              title={cafeteriaRating.title!}
              header={cafeteriaRating.header}
            />
            <RatingTag
              rating={senseOfBelongingRating.rating}
              title={senseOfBelongingRating.title!}
              header={senseOfBelongingRating.header}
            />
            <RatingTag
              rating={recommendationRating.rating}
              title={recommendationRating.title!}
              header={recommendationRating.header}
            />
          </div>

          <DetailReviewInfoContainer
            admissionYear={data!.admissionDate}
            academicStatus={academicStatus}
            username={userName!}
            postDate={data!.createdAt!}
            contactMetaData={contactMethod}
          />
        </DetailReviewHeaderContainer>

        <LongQuestionsDisplayLayout>
          {data?.longQuestionResponses.map((data) => {
            return (
              <LongTextDisplayContainer
                title={
                  schoolReviewLongQuestionsMapper[data!.questionId].question
                }
                content={data!.text}
                key={data!.questionId}
              />
            )
          })}
        </LongQuestionsDisplayLayout>
      </PageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ["school-detail-review", { id: id }],
    apiService.getSchoolDetailReview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
export default SchoolReviewDetailPage
