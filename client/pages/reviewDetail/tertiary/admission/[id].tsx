import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { dehydrate, QueryClient } from "react-query"
import ReviewNumberItem from "../../../../components/common/display/items/number"
import DseScoreList from "../../../../components/common/list/dseScore"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import LongTextDisplayContainer from "../../../../components/containers/longTextDisplay"
import LongQuestionsDisplayLayout from "../../../../components/layouts/longQuestionsDisplay"

import PageLayout from "../../../../components/layouts/page"
import useGetAdmissionOfferReview from "../../../../hooks/api/get/useGetAdmissionOfferReview"
import { admissionOfferReviewLongQuestionsMapper } from "../../../../mappers/longQuestion"
import {
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE,
  ADMISSION_LEVEL_TYPE,
  SCORE_TYPE
} from "../../../../types/common"
import { apiService } from "../../../../utils/api/api"
import { CommonCopyRight } from "../../../../utils/copyRight/common"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const AdmissionReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useGetAdmissionOfferReview(id as string)
  const [dseBestFive, setDseBestFive] = useState<number | null>(null)
  const [dseBestSix, setDseBestSix] = useState<number | null>(null)
  const contactMethod = data?.contactMethod
    ? { type: data.contactMethod.type, detail: data.contactMethod.value }
    : null

  const userName = data?.anonymous
    ? CommonCopyRight.NOT_WILLING_TO_RESPONSE
    : data?.user.name

  const tags = [data?.program.jupasCode, "入學情報"]

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_admission_review_detail`,
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
    <PageLayout>
      <DetailReviewHeaderContainer
        score={data?.votes!}
        ChineseTitle={data!.program.chineseName}
        EnglishTitle={data?.program.englishName}
        //schoolShortName={data!.school.shortName.toLowerCase()}
        schoolShortName="apa"
        postId={data!.id}
        title={data!.title}
        additionalInfoTag={tags}
        // onVote={mutate}

        isStudent={!!data?.user.hasSchoolBadge}
        onVote={() => {}}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center w-full mt-12 gap-y-4 ">
          <TextTag
            title={"application type"}
            type="admission"
            header="入學類型"
          />
          <TextTag
            title={data?.offerType.displayText!}
            type="offer_type"
            header="Offer類型"
          />
          <TextTag
            title={data?.admissionLevel.displayText!}
            type="admission_year"
            header="入學年級"
          />
          <TextTag
            title={data?.currentYearOfStudy.displayText!}
            type="year_of_study"
            header="現時學業年級"
          />
        </div>

        <div className="flex flex-wrap flex-row justify-evenly w-full mt-12">
          <ReviewNumberItem detail={dseBestFive} title={SCORE_TYPE.BEST_FIVE} />
          <ReviewNumberItem detail={dseBestSix} title={SCORE_TYPE.BEST_SIX} />
          <ReviewNumberItem detail={data?.gpa} title={SCORE_TYPE.GPA} />
        </div>

        <DseScoreList dseScores={data?.dseScores} className="mt-12" />

        <DetailReviewInfoContainer
          offerDate={data?.offerReceiveDate}
          contactMetaData={contactMethod}
          username={userName!}
          postDate={data!.createdAt!}
          currentProgramme={data?.currentProgram.chineseName}
        />
      </DetailReviewHeaderContainer>

      <LongQuestionsDisplayLayout>
        {data?.longQuestionResponses.map((data) => {
          return (
            <LongTextDisplayContainer
              title={
                admissionOfferReviewLongQuestionsMapper[data!.questionId]
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
    ["admission-offer-detail-review", { id: id }],
    apiService.getAdmissionOfferDetailReview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default AdmissionReviewDetailPage
