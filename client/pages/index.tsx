import { TextField } from "@mui/material"
import type { NextPage } from "next"
import { useEffect, useState } from "react"

import BaseSelect from "../components/common/inputs/select"
import PageLayout from "../components/layouts/page"
import { SchoolTypeId } from "../types/common"

import { dehydrate, QueryClient, useQueries, useQuery } from "react-query"

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

import Session from "supertokens-auth-react/recipe/session"
import BaseTextInput from "../components/common/inputs/text"
import SearchTextInput from "../components/common/inputs/text/search"

const SchoolType = [
  { value: SchoolTypeId.UNIVERSITY, title: "大學" },
  { value: SchoolTypeId.COLLEGE, title: "大專" }
]

const Home: NextPage = (props) => {
  const router = useRouter()

  const { data, isLoading } = useGetSchools()
  // const { data } = useQuery(["schools"], apiService.getSchools)
  useEffect(() => {
    // window.gtag("event", "page_view", {
    //   page_title: "M23232323ain",
    //   page_location: `${router.pathname}`,
    //   page_path: `${router.pathname}`,
    //   send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    // })
    // window.gtag("event", "testing", {
    //   page_title: "testing1",
    //   page_location: `testing2`,
    //   page_path: `testing3`,
    //   send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    // })
    // ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`)
    // ReactGA.event({
    //   category: "12312312312",
    //   action: "1",
    //   label: "cc"
    // })
    // window.gtag("event", "aaa", {
    //   event_category: "bbb",
    //   event_label: "ccc"
    // })
    window.gtag("event", "aaa_testing ")
  }, [])

  const [type, setType] = useState(SchoolTypeId.UNIVERSITY)
  const [search, setSearch] = useState("")
  const [list, setList] = useState<IGetSchoolRes[]>([])

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }
  // console.log(data)
  useEffect(() => {
    const res = CommonHelpers.schoolFilter(data, search.trim(), type)
    setList(res)
  }, [search, type])

  useEffect(() => {
    const check = async () => {
      return await Session.doesSessionExist()
    }
    const res = check()
    // console.log(123, res)
  }, [])

  // var now = new Date()
  // // Add 24 fortnights (48 weeks)
  //  new Date(now.setDate(now.getDate() + 24 * 14))

  // var now = new Date()
  // Add two weeks
  // const a = new Date(
  //   new Date().setDate(new Date().getDate() - 365 * 50)
  // ).toISOString()

  // console.log(a)

  return (
    <PageLayout>
      <SEO title="主頁" description="123" />
      <div className="flex justify-center gap-x-4 mt-8">
        <SearchTextInput onChange={handleSearchChange} value={search} />
        <BaseSelect
          items={SchoolType}
          selectValue={type}
          selectClassName="bg-white  px-2"
          onChange={handleTypeChange}
        />
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

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["schools"], apiService.getSchools)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
    revalidate: 20
  }
}
export default Home
