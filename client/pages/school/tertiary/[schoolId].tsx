import { TextField } from "@mui/material"
import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { FiArrowRight } from "react-icons/fi"
import BaseButton from "../../../components/common/buttons"
import ProgrammeCard from "../../../components/common/cards/programme"
import BaseRadar from "../../../components/common/charts/radar"
import ReviewRankingCircularBar from "../../../components/common/circularBar/reviewRanking"
import BaseSelect from "../../../components/common/select"

import ReviewHeaderContainer from "../../../components/containers/reviewHeader"
import CardDisplayLayout from "../../../components/layouts/cardDisplay"
import PageLayout from "../../../components/layouts/page"
import { SCHOOL_TYPE } from "../../../types/common"

const TertiarySchoolPage: NextPage = () => {
  const router = useRouter()
  const { schoolId } = router.query
  const [type, setType] = useState("all")
  const [search, setSearch] = useState("")

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }

  const facultyType = [
    { value: "all", title: "所有課程" },
    { value: "engineering", title: "工程" },
    { value: "law", title: "法律" },
  ]

  return (
    <PageLayout>
      <ReviewHeaderContainer
        ChineseTitle={"計量金融學及風險管理科學"}
        EnglishTitle={"Quantitative Finance and Risk Management Science"}
        ShortTitle={"HKu"}
        schoolShortName={"hku"}
      >
        <div className="md:flex md:justify-center ">
          <div className="flex flex-row md:w-2/5 ">
            <div className="w-3/5 ">
              <BaseRadar
                scores={[3, 3.6, 3.7, 3.6, 4]}
                labels={["January", "February", "March", "April", "May"]}
              />
            </div>

            <div className="w-2/5  py-12">
              <ReviewRankingCircularBar currentValue={4} color={"red"} />
              <Link href={`/review/tertiary/school/${schoolId}`}>
                <a>
                  <BaseButton className="w-full justify-center gap-x-2  text-sm md:text-base mt-4 bg-theme-one-500 text-white shrink-0">
                    <span>更多學校評價</span>
                    <FiArrowRight />
                  </BaseButton>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </ReviewHeaderContainer>
      <div className="flex justify-center gap-x-4 ">
        <TextField
          className="bg-white w-3/5 "
          variant="outlined"
          onChange={handleSearchChange}
          placeholder={"輸入學校中文或英文名稱"}
          value={search}
        />
        <BaseSelect
          items={facultyType}
          selectValue={type}
          selectClassName="bg-white  px-2"
          onChange={handleTypeChange}
        />
      </div>

      <CardDisplayLayout>
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
        <ProgrammeCard
          programmeChineseName="123"
          programmeEnglishName="123"
          programmeId="123"
          totalReports={123}
          programmeType="123"
          programmeShortName="123"
        />
      </CardDisplayLayout>
    </PageLayout>
  )
}

export default TertiarySchoolPage
