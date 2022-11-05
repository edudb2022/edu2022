import Link from "next/link"
import React from "react"
import AdmissionOfferReviewCard from "../../../components/common/cards/review/admission"
import GradJobOfferReviewCard from "../../../components/common/cards/review/gradJob"
import InternshipReviewCard from "../../../components/common/cards/review/internship"
import InterviewReviewCard from "../../../components/common/cards/review/interview"
import ProgrammeReviewCard from "../../../components/common/cards/review/programme"
import BaseRadar from "../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../components/common/circularBar/reviewRanking"
import RatingTag from "../../../components/common/tags/rating"
import RatingLargeTag from "../../../components/common/tags/ratingLarge"
import ReviewHeaderContainer from "../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../components/layouts/cardDisplay"
import PageLayout from "../../../components/layouts/page"
import SEO from "../../../components/seo"

const ProgrammePage: React.FunctionComponent = () => {
  return (
    <PageLayout>
      <SEO
        title="應用及人本計算學（榮譽）文學士"
        description="Bachelor of Management Science and Information Management (Honours)"
        openGraph={{
          title: "應用及人本計算學（榮譽）文學士",
          description:
            "Bachelor of Management Science and Information Management (Honours)",
          site_name: "baau4",
          article: {
            //card details

            tags: [
              "香港科技大學",
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

      <ReviewHeaderContainer
        ChineseTitle="應用及人本計算學（榮譽）文學士"
        EnglishTitle="Bachelor of Management Science and Information Management (Honours)"
        schoolShortName="hku"
        ShortTitle="Bachelor"
      >
        <div className="md:flex md:justify-center ">
          <div className="flex flex-col md:flex-row justify-center items-center md:w-2/5 ">
            <div className="w-4/5 md:w-3/5 ">
              <BaseRadar
                scores={[1, 2, 3, 4, 5]}
                labels={[
                  "課程結構",
                  "爛龜指數",
                  "爆肝指數",
                  "學習經歷",
                  "資源"
                ]}
              />
            </div>

            <div className="w-2/5  py-12 flex flex-col justify-center items-center">
              <RatingLargeTag title={"red"} rating={5} header="推薦指數" />
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>

      <CardDisplayLayout>
        <Link href={`/review/tertiary/programme/${"2"}`}>
          <a>
            <ProgrammeReviewCard
              id={2}
              schoolChineseName="12"
              schoolEnglishName="123"
              schoolShortName="hku"
              totalReports={123}
            />
          </a>
        </Link>

        <Link href={`/review/tertiary/interview/${"2"}`}>
          <a>
            <InterviewReviewCard
              jupasBestFiveValue={12}
              jupasBestSixValue={33}
              nonJupasBestFiveValue={3}
              nonJupasBestGpaValue={3.4}
              id={2}
              schoolChineseName="123"
              schoolEnglishName="123"
              schoolShortName="hku"
              totalReports={123}
            />
          </a>
        </Link>
        <Link href={`/review/tertiary/admission/${"2"}`}>
          <a>
            <AdmissionOfferReviewCard
              id={2}
              schoolChineseName="123"
              schoolEnglishName="123"
              schoolShortName="hku"
              totalReports={123}
              jupasBestFiveValue={12}
              jupasBestSixValue={33}
              nonJupasBestFiveValue={3}
              nonJupasBestGpaValue={3.4}
            />
          </a>
        </Link>

        <Link href={`/review/tertiary/internship/${"2"}`}>
          <a>
            <InternshipReviewCard
              id={2}
              schoolChineseName="123"
              schoolEnglishName="123"
              schoolShortName="hku"
              totalReports={123}
              salary={332244}
              labels={["summer", "winder", "placement"]}
              statistic={[1, 5, 6]}
            />
          </a>
        </Link>

        <Link href={`/review/tertiary/gradJob/${"2"}`}>
          <a>
            <GradJobOfferReviewCard
              id={2}
              schoolChineseName="123"
              schoolEnglishName="123"
              schoolShortName="hku"
              totalReports={123}
              salary={123123123}
              hope={2.5}
            />
          </a>
        </Link>
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default ProgrammePage
