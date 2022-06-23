import { NextPage } from "next"
import React from "react"
import ReviewSalaryItem from "../../../../components/common/display/items/salary"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"

import PageLayout from "../../../../components/layouts/page"

const GradJobReviewDetailPage: NextPage = () => {
  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
      >
        <TextTag title="summer" type="summer" />
        <TextTag title="winter" type="winter" />
        <TextTag title="placement" type="placement" />
        <ReviewSalaryItem salary={203444} title="123" subtitle="123" />
        <ReviewSalaryItem salary={203444} title="123" subtitle="123" />
        <ReviewSalaryItem salary={203444} title="123" subtitle="123" />
        <ReviewSalaryItem salary={203444} title="123" subtitle="123" />
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

export default GradJobReviewDetailPage
