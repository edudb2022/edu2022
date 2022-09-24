import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import LongQuestionsSection from "../../../../components/common/inputs/sections/longQuestions"
import RatingTag from "../../../../components/common/tags/rating"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"
import { schoolReviewLongQuestions } from "../../../../constants/longQuestion"
import {
  schoolCampusRating,
  schoolPolicyRating,
  schoolRecourcesRating,
  schoolSelfOfBelongingRating,
  shcoolCafeteriaRating
} from "../../../../constants/rating"
import { schoolReviewRatingQuestions } from "../../../../constants/ratingQuestion"
import useGetSchoolDetailReivew from "../../../../hooks/api/useGetSchoolDetailReview"
import { apiService } from "../../../../utils/api/api"

const SchoolReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useGetSchoolDetailReivew(id as string)

  const campusRating = {
    rating: Number(
      schoolCampusRating[data!.ratingQuestionResponses[0]!.optionId].value
    ),
    title: schoolCampusRating[data!.ratingQuestionResponses[0]!.optionId].label,
    header:
      schoolReviewRatingQuestions[data!.ratingQuestionResponses[0].questionId]
        .question
  }

  const resourceRating = {
    rating: Number(
      schoolRecourcesRating[data!.ratingQuestionResponses[1]!.optionId].value
    ),
    title:
      schoolRecourcesRating[data!.ratingQuestionResponses[1]!.optionId].label,
    header:
      schoolReviewRatingQuestions[data!.ratingQuestionResponses[1].questionId]
        .question
  }
  const policyRating = {
    rating: Number(
      schoolPolicyRating[data!.ratingQuestionResponses[2]!.optionId].value
    ),
    title: schoolPolicyRating[data!.ratingQuestionResponses[2]!.optionId].label,
    header:
      schoolReviewRatingQuestions[data!.ratingQuestionResponses[2].questionId]
        .question
  }
  const cafeteriaRating = {
    rating: Number(
      shcoolCafeteriaRating[data!.ratingQuestionResponses[3]!.optionId].value
    ),
    title:
      shcoolCafeteriaRating[data!.ratingQuestionResponses[3]!.optionId].label,
    header:
      schoolReviewRatingQuestions[data!.ratingQuestionResponses[3].questionId]
        .question
  }

  const selfOfBelongingRating = {
    rating: Number(
      schoolSelfOfBelongingRating[data!.ratingQuestionResponses[4]!.optionId]
        .value
    ),
    title:
      schoolSelfOfBelongingRating[data!.ratingQuestionResponses[4]!.optionId]
        .label,
    header:
      schoolReviewRatingQuestions[data!.ratingQuestionResponses[4].questionId]
        .question
  }

  const b = schoolReviewLongQuestions[data!.longQuestionResponses[0].questionId]
    .question as string

  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle={data!.title}
        // EnglishTitle="123"
        schoolShortName="hku"
        // ShortTitle="123"
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
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
          username={data!.user.name}
          postDate="01/02/23"
          contact="tg : 123"
        />
      </DetailReviewHeaderContainer>

      <LongQuestionsSection
        title={b}
        content={data!.longQuestionResponses[0].text}
      />
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ["school-detail-review", { id: id }],
    apiService.getSchoolDetailReivew
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
export default SchoolReviewDetailPage
