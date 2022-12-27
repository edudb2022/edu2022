import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import ReviewNumberItem from "../../../../components/common/display/items/number"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"
import {
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE,
  ADMISSION_LEVEL_TYPE,
  SCORE_TYPE
} from "../../../../types/common"
import trackingEvent from "../../../../utils/services/GoogleAnalytics/tracking"

const AdmissionReviewDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  // const contactMethod = data?.contactMethod
  // ? { type: data.contactMethod.type, detail: data.contactMethod.value }
  // : null

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(
      `page_view_admission_review_detail`,
      undefined,
      `${id}`
    )
  }, [])

  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle="Worse ever !"
        postId={1}
        // EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="hku"
        onVote={() => {}}
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <TextTag
            title={ADMISSION_TYPE.NON_JUPAS}
            type="admission"
            header="入學類型"
          />
          <TextTag
            title={ADMISSION_OFFER_TYPE.CONDITIONAL}
            type="offer_type"
            header="Offer類型"
          />
          <TextTag
            title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
            type="admission_year"
            header="入學年級"
          />
          <TextTag
            title={ADMISSION_LEVEL_TYPE.FIVE_PLUS}
            type="year_of_study"
            header="現時學業年級"
          />
        </div>

        <div className="flex flex-wrap flex-row justify-evenly  w-full border-2">
          <ReviewNumberItem detail={123} title={SCORE_TYPE.BEST_FIVE} />
          <ReviewNumberItem detail={123} title={SCORE_TYPE.BEST_SIX} />
          <ReviewNumberItem detail={123} title={SCORE_TYPE.GPA} />
        </div>

        <DetailReviewInfoContainer
          offerDate="02/23"
          currentProgramme="213"
          currentSchool="123"
          username={null}
          postDate="01/02/23"
          contactMetaData={{ type: "123", detail: "123" }}
        />
      </DetailReviewHeaderContainer>
    </PageLayout>
  )
}

export default AdmissionReviewDetailPage
