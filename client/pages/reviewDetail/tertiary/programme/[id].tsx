import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { dehydrate, QueryClient } from "react-query"
import RatingTag from "../../../../components/common/tags/rating"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import LongTextDisplayContainer from "../../../../components/containers/longTextDisplay"
import LongQuestionsDisplayLayout from "../../../../components/layouts/longQuestionsDisplay"

import PageLayout from "../../../../components/layouts/page"
import SEO from "../../../../components/seo"
import { SITENAME, WEB_ORIGIN } from "../../../../constants/common"
import {
  programmeGpaRating,
  programmeLearningExperienceRating,
  programmeRecommendRating,
  programmeResourcedRating,
  programmeStructureRating,
  programmeWorkLoadRating
} from "../../../../constants/rating"
import { CommonHelpers } from "../../../../helpers"
import useGetProgrammeDetailReview from "../../../../hooks/api/useGetProgrammeDetailReview"
import useVoteSchoolReview from "../../../../hooks/api/vote/useVoteSchoolReview"
import { programmeReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"
import { programmeReviewRatingQuestionsMapper } from "../../../../mappers/ratingQuestions"
import { apiService } from "../../../../utils/api/api"
import { CommonCopyRight } from "../../../../utils/copyRight/common"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const ProgrammeReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetProgrammeDetailReview(id as string)
  const { mutate } = useVoteSchoolReview()

  const tags = [data?.program?.jupasCode, "課程評價"]
  const academicStatus =
    data?.academicStatus || CommonCopyRight.NOT_WILLING_TO_RESPONSE
  const userName = data?.anonymous
    ? CommonCopyRight.NOT_WILLING_TO_RESPONSE
    : data?.user.name

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_programme_review_detail`,
      undefined,
      `${id}`
    )
  }, [])

  return (
    <>
      <SEO
        title={data!.title}
        //description="Bachelor of Management Science and Information Management (Honours)"
        openGraph={{
          title: data!.title,
          // description:
          //    data!.title,
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
              data?.program.chineseName!,
              data?.program.englishName!,

              CommonHelpers.formatData(data?.admissionDate!, "MM/YY")
            ]
          }
        }}
      />
      <PageLayout>
        <DetailReviewHeaderContainer
          score={data!.votes}
          ChineseTitle={data?.program.chineseName!}
          EnglishTitle={data?.program.englishName!}
          title={data?.title}
          schoolShortName={"hku"}
          postId={data!.id}
          additionalInfoTag={tags}
          onVote={mutate}
          isStudent={!!data?.user.hasSchoolBadge}
        >
          <div className="flex flex-wrap flex-row justify-evenly w-full ">
            <RatingTag
              rating={data!.ratingQuestionResponses[0].optionId - 1}
              title={
                programmeStructureRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[0]!.optionId
                )?.label!
              }
              header={
                programmeReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[0].questionId
                ].question
              }
            />
            <RatingTag
              rating={data!.ratingQuestionResponses[1].optionId - 1}
              title={
                programmeGpaRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[1]!.optionId
                )?.label!
              }
              header={
                programmeReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[1].questionId
                ].question
              }
            />
            <RatingTag
              rating={data!.ratingQuestionResponses[2].optionId - 1}
              title={
                programmeWorkLoadRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[2]!.optionId
                )?.label!
              }
              header={
                programmeReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[2].questionId
                ].question
              }
            />
            <RatingTag
              rating={data!.ratingQuestionResponses[3].optionId - 1}
              title={
                programmeLearningExperienceRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[3]!.optionId
                )?.label!
              }
              header={
                programmeReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[3].questionId
                ].question
              }
            />
            <RatingTag
              rating={data!.ratingQuestionResponses[4].optionId - 1}
              title={
                programmeResourcedRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[4]!.optionId
                )?.label!
              }
              header={
                programmeReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[4].questionId
                ].question
              }
            />
            <RatingTag
              rating={data!.ratingQuestionResponses[5].optionId - 1}
              title={
                programmeRecommendRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[5]!.optionId
                )?.label!
              }
              header={
                programmeReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[5].questionId
                ].question
              }
            />
          </div>

          <DetailReviewInfoContainer
            admissionYear={data!.admissionDate}
            academicStatus={academicStatus}
            username={userName!}
            postDate={data!.createdAt!}
            contact="tg : 123"
          />
        </DetailReviewHeaderContainer>
        <LongQuestionsDisplayLayout>
          {data?.longQuestionResponses.map((data) => {
            return (
              <LongTextDisplayContainer
                title={
                  programmeReviewLongQuestionsMapper[data!.questionId].question
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
    ["programme-detail-review", { id: id }],
    apiService.getProgrammeDetailReview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default ProgrammeReviewDetailPage
