import { NextPage } from "next"
import React from "react"
import TextTag from "../../../../components/common/tags/text"
import DetailReviewHeaderContainer from "../../../../components/containers/detailReviewHeader"
import DetailReviewInfoContainer from "../../../../components/containers/detailReviewInfo"
import PageLayout from "../../../../components/layouts/page"
import ReviewSalaryItem from "../../../../components/common/display/items/salary"
import RatingTag from "../../../../components/common/tags/rating"

const IntershipReviewDetailPage: NextPage = () => {
  return (
    <PageLayout>
      <DetailReviewHeaderContainer
        score={123}
        ChineseTitle="123"
        EnglishTitle="123"
        schoolShortName="hku"
        ShortTitle="123"
      >
        <div className="flex flex-wrap flex-row justify-evenly w-full border-2">
          <TextTag title="summer" type="summer" header="Intern類型" />
          <RatingTag rating={5} title="12313" header="搵工難度" />
          <ReviewSalaryItem salary={203444} title="平均月薪" />
        </div>
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

export default IntershipReviewDetailPage
