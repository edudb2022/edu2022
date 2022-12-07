import { TextField } from "@mui/material"
import axios from "axios"
import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import ProgrammeCard from "../../../components/common/cards/programme"
import BaseRadar from "../../../components/common/charts/radar"

import BaseSelect from "../../../components/common/inputs/select"
import SearchTextInput from "../../../components/common/inputs/text/search"
import RatingLargeTag from "../../../components/common/tags/ratingLarge"

import ReviewHeaderContainer from "../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../components/layouts/cardDisplay"
import PageLayout from "../../../components/layouts/page"
import SEO from "../../../components/seo"
import { contactMethodTypesList } from "../../../constants/common"
import trackingEvent from "../../../utils/services/GoogleAnalytics/tracking"
// import ReactGA from "react-ga"

const TertiarySchoolPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [type, setType] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent(`page_view_school`, undefined, `${id}`)
  }, [])

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }

  const facultyType = [
    { value: "all", title: "所有課程" },
    { value: "engineering", title: "工程" },
    { value: "law", title: "法律" }
  ]

  return (
    <PageLayout>
      <SEO
        title="香港科技大學"
        description="Hong Kong University of Science and Technology"
        openGraph={{
          title: "香港科技大學",
          description: "Hong Kong University of Science and Technology",
          site_name: "baau4",
          article: {
            //faculty
            tags: [
              "香港科技大學",
              "HKUST",
              "Hong Kong University of Science and Technology",
              "學校設施及環境",
              "資源及支援",
              "學校政策",
              "校內膳食",
              "歸屬感"
            ]
          }
        }}
      />

      <ReviewHeaderContainer
        ChineseTitle={"香港科技大學"}
        EnglishTitle={"Hong Kong University of Science and Technology"}
        schoolShortName={"hku"}
        additionalInfoTag={["大學"]}
      >
        <div className="md:flex md:justify-center ">
          <div className="flex flex-col justify-center items-center md:flex-row md:w-2/5 ">
            <div className="w-4/5 md:w-3/5 ">
              <BaseRadar
                scores={[3, 3.6, 3.7, 3.6, 4]}
                labels={[
                  "學校設施及環境",
                  "資源及支援",
                  "學校政策",
                  "校內膳食",
                  "歸屬感"
                ]}
              />
            </div>

            <div className="md:w-2/5 w-full py-12 flex flex-row md:flex-col md:justify-between justify-center gap-x-4 items-center">
              <RatingLargeTag title={"red"} rating={1} header="推薦指數" />
              <Link href={`/review/tertiary/school/${id}`}>
                <a className="text-theme-one-500 mt-4 border-b-2 border-theme-one-500">
                  更多學校評價
                </a>
              </Link>
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>
      <div className="flex justify-center gap-x-4 mx-2 md:mx-0">
        <SearchTextInput onChange={handleSearchChange} value={search} />
        <BaseSelect
          items={contactMethodTypesList}
          selectValue={type}
          selectClassName="bg-white  px-2"
          onChange={handleTypeChange}
        />
      </div>

      <CardDisplayLayout>
        <ProgrammeCard
          programmeChineseName="計量金融學及風險管理科學"
          programmeEnglishName="Quantitative Finance and Risk Management Science"
          programmeId={123}
          totalReports={123}
          programmeType="Bachelor"
          faculty="Fuckulty of finance"
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default TertiarySchoolPage
