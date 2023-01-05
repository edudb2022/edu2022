import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { dehydrate, QueryClient } from "react-query"
import ReviewNumberItem from "../../../../components/common/display/items/number"
import DseScoreList from "../../../../components/common/list/dseScore"

import RatingTag from "../../../../components/common/tags/rating"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import LongTextDisplayContainer from "../../../../components/containers/longTextDisplay"
import LongQuestionsDisplayLayout from "../../../../components/layouts/longQuestionsDisplay"

import PageLayout from "../../../../components/layouts/page"
import SEO from "../../../../components/seo"
import { SITENAME, WEB_ORIGIN } from "../../../../constants/common"
import {
  interviewDifficultyRating,
  interviewExperienceRating
} from "../../../../constants/rating"
import { CommonHelpers } from "../../../../helpers"
import useGetInterviewDetailReview from "../../../../hooks/api/get/useGetInterviewReview"
import { interviewReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"
import { interviewReviewRatingQuestionsMapper } from "../../../../mappers/ratingQuestions"
import { SCORE_TYPE } from "../../../../types/common"
import { apiService } from "../../../../utils/api/api"
import { CommonCopyRight } from "../../../../utils/copyRight/common"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const InterviewReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [dseBestFive, setDseBestFive] = useState(0)
  const [dseBestSix, setDseBestSix] = useState(0)
  const { data } = useGetInterviewDetailReview(id as string)

  const tags = ["面試情報"]

  const userName = data?.anonymous
    ? CommonCopyRight.NOT_WILLING_TO_RESPONSE
    : data?.user.name

  const contactMethod = data?.contactMethod
    ? { type: data.contactMethod.type, detail: data.contactMethod.value }
    : null

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_interview_review_detail`,
      undefined,
      `${id}`
    )
  }, [])

  useEffect(() => {
    if (data?.dseScores) {
      if (data.dseScores.length === 5) {
        let score = 0
        data.dseScores.forEach((data) => {
          score += data.grade.value
        })
        setDseBestFive(score)
      }
      if (data.dseScores.length === 6) {
        let score = 0
        for (let i = 0; i < data.dseScores.length; i++) {
          score += data.dseScores[i].grade.value
          if (i === 4) {
            setDseBestFive(score)
          }
          if (i === 4) {
            setDseBestSix(score)
          }
        }
      }
    }
  }, [data?.dseScores])

  return (
    <>
      <SEO
        title={data!.title}
        //description="Bachelor of Management Science and Information Management (Honours)"
        openGraph={{
          title: data!.title,
          // description:
          //    data!.title,
          site_name: SITENAME,
          url: `${WEB_ORIGIN}${router.asPath}`,
          article: {
            publishedTime: data?.createdAt,
            authors: [
              data?.user.name || CommonCopyRight.NOT_WILLING_TO_RESPONSE
            ],
            tags: [
              data!.title,
              "HKUST",
              data?.program.chineseName!,
              data?.program.englishName!,
              CommonHelpers.formatData(data?.createdAt!, "MM/YY"),
              CommonHelpers.formatData(data?.interviewDate!, "MM/YY")
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
          schoolShortName={"hkuspace"}
          postId={data!.id}
          additionalInfoTag={tags}
          isStudent={!!data?.user.hasSchoolBadge}
          onVote={() => {}}
        >
          <div className="flex flex-wrap flex-row justify-evenly w-full ">
            <RatingTag
              rating={data!.ratingQuestionResponses[0].optionId - 1}
              title={
                interviewExperienceRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[0]!.optionId
                )?.label!
              }
              header={
                interviewReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[0].questionId
                ].question
              }
            />
            <RatingTag
              rating={data!.ratingQuestionResponses[1].optionId - 1}
              title={
                interviewDifficultyRating.find(
                  (val) =>
                    val.value == data!.ratingQuestionResponses[1]!.optionId
                )?.label!
              }
              header={
                interviewReviewRatingQuestionsMapper[
                  data!.ratingQuestionResponses[1].questionId
                ].question
              }
            />
          </div>
          <div className="flex flex-wrap flex-row justify-evenly w-full mt-4">
            <ReviewNumberItem
              title={SCORE_TYPE.BEST_FIVE}
              detail={dseBestFive}
            />
            <ReviewNumberItem title={SCORE_TYPE.BEST_SIX} detail={dseBestSix} />
            <ReviewNumberItem title={SCORE_TYPE.GPA} detail={123} />
          </div>

          <DseScoreList dseScores={data?.dseScores} className="mt-10" />

          <DetailReviewInfoContainer
            contactMetaData={contactMethod}
            interviewDate={data!.interviewDate}
            DressCode={data?.dressCode.displayText}
            applicationType={data?.applicationType.displayText}
            // academicStatus={academicStatus}
            username={userName!}
            postDate={data!.createdAt!}
            currentProgramme={data?.currentProgram.chineseName}
            currentSchool={data?.currentSchoolType.displayText}
            // contact="tg : 123"
          />
        </DetailReviewHeaderContainer>
        <LongQuestionsDisplayLayout>
          {data?.longQuestionResponses.map((data) => {
            return (
              <LongTextDisplayContainer
                title={
                  interviewReviewLongQuestionsMapper[data!.questionId].question
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
    ["interview-detail-review", { id: id }],
    apiService.getInterviewDetailReview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
export default InterviewReviewDetailPage
