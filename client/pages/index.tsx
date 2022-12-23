import type { NextPage } from "next"
import { useEffect, useState } from "react"

import BaseSelect from "../components/common/inputs/select"
import PageLayout from "../components/layouts/page"
import { SchoolTypeId } from "../types/common"

import { dehydrate, QueryClient } from "react-query"

import SEO from "../components/seo"

import SchoolsReviewCards from "../components/common/cards/review/school"
import Link from "next/link"

import CardDisplayLayout from "../components/layouts/cardDisplay"

import { CommonHelpers } from "../helpers"
import { schoolTypesList } from "../constants/common"

import { useRouter } from "next/router"

import { apiService } from "../utils/api/api"
import useGetSchools from "../hooks/api/useGetSchools"
import { IGetSchoolRes } from "../types/api"

import SearchTextInput from "../components/common/inputs/text/search"
import trackingEvent from "../utils/services/GoogleAnalytics/tracking"

const SchoolOptions = [
  { value: 0, title: "全部" },
  { value: SchoolTypeId.UNIVERSITY, title: "大學" },
  { value: SchoolTypeId.COLLEGE, title: "大專" }
]

const Home: NextPage = (props) => {
  const { data, isLoading } = useGetSchools()

  useEffect(() => {
    // Call tracking event onMount
    trackingEvent.customEvent("page_view_main")
  }, [])

  const [type, setType] = useState(0)
  const [search, setSearch] = useState("")
  const [list, setList] = useState<IGetSchoolRes[]>([])

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const res = CommonHelpers.schoolFilter(data, search.trim(), type)
    setList(res)
  }, [search, type, data])

  return (
    <PageLayout>
      <SEO title="主頁" />
      {/* <div className="flex justify-center gap-x-4 mt-8 mx-2"> */}
      <div className="w-full flex justify-center">
        <div className="flex justify-center gap-x-4 w-full md:w-11/12  mt-8 mx-2 my-4">
          <SearchTextInput onChange={handleSearchChange} value={search} />
          <BaseSelect
            items={SchoolOptions}
            selectValue={type}
            selectClassName="bg-white  px-2"
            onChange={handleTypeChange}
          />
        </div>
      </div>

      <CardDisplayLayout>
        {list.map((data) => {
          //need refactor no inline defination
          const title =
            schoolTypesList.find((ele) => ele.value === data.type.id)?.title ??
            ""

          // change to object
          // const score = [
          //   data.report[1]?.averageScore,
          //   data.report[4]?.averageScore,
          //   data.report[2]?.averageScore,
          //   data.report[0]?.averageScore,
          //   data.report[3]?.averageScore
          // ]
          const score = [0, 1, 3, 4, 5]

          return (
            <Link key={data.id} href={`/school/tertiary/${data.id}`}>
              <a key={data.id}>
                <SchoolsReviewCards
                  key={data.id}
                  id={data.id}
                  schoolChineseName={data.chineseName}
                  schoolEnglishName={data.englishName}
                  totalReports={1}
                  type={title}
                  score={score}
                  schoolShortName={data.shortName}
                  schoolTypeId={type}
                />
              </a>
            </Link>
          )
        })}
      </CardDisplayLayout>
    </PageLayout>
  )
}

export async function getServerProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["schools"], apiService.getSchools)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
    // revalidate: 20
  }
}
export default Home
