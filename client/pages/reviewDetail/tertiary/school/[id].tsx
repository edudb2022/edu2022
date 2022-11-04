import dayjs from "dayjs"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import LongQuestionsSection from "../../../../components/common/inputs/sections/longQuestions"
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
  schoolResourcesRating,
  schoolSenseOfBelongingRating
} from "../../../../constants/rating"

import useGetSchoolDetailReivew from "../../../../hooks/api/useGetSchoolDetailReview"
import { schoolReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"
import { schoolReviewRatingQuestionsMapper } from "../../../../mappers/ratingQuestions"
import { apiService } from "../../../../utils/api/api"

const SchoolReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetSchoolDetailReivew(id as string)
  const username = data?.anonymous === true ? "anonymous" : data?.user.name
  const postDate = dayjs(data?.createdAt).format("MM/YY")
  const campusRating = {
    rating: Number(
      schoolCampusRating[data!.ratingQuestionResponses[0]!.optionId].value
    ),
    title: schoolCampusRating[data!.ratingQuestionResponses[0]!.optionId].label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[0].questionId
      ].question
  }

  const resourceRating = {
    rating: Number(
      schoolResourcesRating[data!.ratingQuestionResponses[1]!.optionId].value
    ),
    title:
      schoolResourcesRating[data!.ratingQuestionResponses[1]!.optionId].label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[1].questionId
      ].question
  }
  const policyRating = {
    rating: Number(
      schoolPolicyRating[data!.ratingQuestionResponses[2]!.optionId].value
    ),
    title: schoolPolicyRating[data!.ratingQuestionResponses[2]!.optionId].label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[2].questionId
      ].question
  }
  const cafeteriaRating = {
    rating: Number(
      schoolCafeteriaRating[data!.ratingQuestionResponses[3]!.optionId].value
    ),
    title:
      schoolCafeteriaRating[data!.ratingQuestionResponses[3]!.optionId].label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[3].questionId
      ].question
  }

  const selfOfBelongingRating = {
    rating: Number(
      schoolSenseOfBelongingRating[data!.ratingQuestionResponses[4]!.optionId]
        .value
    ),
    title:
      schoolSenseOfBelongingRating[data!.ratingQuestionResponses[4]!.optionId]
        .label,
    header:
      schoolReviewRatingQuestionsMapper[
        data!.ratingQuestionResponses[4].questionId
      ].question
  }

  return (
    <>
      <SEO
        title={data!.title}
        description="Bachelor of Management Science and Information Management (Honours)"
        openGraph={{
          title: data!.title,
          description:
            "Bachelor of Management Science and Information Management (Honours)",
          site_name: "GoodTurtle.fyi",
          article: {
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
          schoolShortName="hku"
          postId={data!.id}
        >
          <div className="grid md:grid-cols-6 grid-cols-3 mt-4">
            <RatingTag
              rating={campusRating.rating}
              title={campusRating.title}
              header={campusRating.header}
            />
            <RatingTag
              rating={resourceRating.rating}
              title={resourceRating.title}
              header={resourceRating.header}
            />
            <RatingTag
              rating={policyRating.rating}
              title={policyRating.title}
              header={policyRating.header}
            />
            <RatingTag
              rating={cafeteriaRating.rating}
              title={cafeteriaRating.title}
              header={cafeteriaRating.header}
            />
            <RatingTag
              rating={selfOfBelongingRating.rating}
              title={selfOfBelongingRating.title}
              header={selfOfBelongingRating.header}
            />
            <RatingTag rating={3} title="12313" header="歸屬感" />
          </div>

          <DetailReviewInfoContainer
            admissionYear={data!.admissionYear}
            academicStatus="Year 1"
            username={username!}
            postDate={postDate}
            contact="tg : 123"
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
