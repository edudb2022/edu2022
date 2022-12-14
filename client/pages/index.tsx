import { TextField } from "@mui/material"
import type { NextPage } from "next"
import { ChangeEventHandler, useEffect, useMemo, useState } from "react"
import BaseTextInput from "../components/common/inputs/text"
import ReactGA from "react-ga"
import BaseSelect from "../components/common/inputs/select"
import PageLayout from "../components/layouts/page"
import { SchoolTypeId, SCHOOL_TYPE, SCORE_TYPE } from "../types/common"
import Session from "supertokens-auth-react/recipe/session"
import { useAppSelector } from "../hooks/common/useAppSelector"
import { dehydrate, QueryClient, useQuery } from "react-query"
import axios from "axios"
import BaseModal from "../components/common/modals"
import SuccessModal from "../components/common/modals/succuss"
import { schoolCampusRating } from "../constants/rating"
import SEO from "../components/seo"
import { college, uni } from "../constants/school"
import SchoolsReviewCards, {
  ISchoolsReviewCardProps
} from "../components/common/cards/review/school"
import Link from "next/link"
// import { CommonHelper } from "../helpers"
import CardDisplayLayout from "../components/layouts/cardDisplay"
import { IBaseReviewCardProps } from "../components/common/cards/review"
import { CommonHelpers } from "../helpers"
import { schoolTypesList } from "../constants/common"
// import ReactGA from "react-ga4"
import qs from "qs"
import assert from "assert"
import { Router, useRouter } from "next/router"
import Head from "next/head"
import trackingEvent from "../utils/services/GoogleAnalytics/tracking"
const SchoolType = [
  { value: SchoolTypeId.UNIVERSITY, title: "大學" },
  { value: SchoolTypeId.COLLEGE, title: "大專" }
]

// import dynamic from "next/dynamic"
// import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
// import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword"

const Home: NextPage = (props) => {
  const router = useRouter()

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_title: "M23232323ain",
      page_location: `${router.pathname}`,
      page_path: `${router.pathname}`,
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    })
  }, [])

  const [type, setType] = useState(SchoolTypeId.UNIVERSITY)
  const [search, setSearch] = useState("")
  const [list, setList] = useState<Omit<ISchoolsReviewCardProps, "type">[]>([])

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const res = CommonHelpers.schoolFilter(uni, search.trim(), type)
    setList(res)
  }, [search, type])

  // useEffect(() => {
  //   const abc = (type, ordered) => {
  //     const queryString = qs.stringify(
  //       {
  //         order: {
  //           type: ordered
  //         }
  //       },
  //       {
  //         skipNulls: true
  //       }
  //     )
  //     return axios.post(`/111/${queryString}`)
  //   }
  //   abc(undefined, undefined)
  // }, [])

  // useEffect(() => {
  //   const hanldeRouterChange = (url: string) => {
  //     trackingEvent.pageView(url, "testing")
  //   }
  //   router.events.on("hashChangeComplete", hanldeRouterChange)
  //   return () => {
  //     router.events.off("hashChangeComplete", hanldeRouterChange)
  //   }
  // }, [router.events])

  return (
    // <EmailPasswordAuthNoSSR>
    //   <EmailPasswordAuth>

    <PageLayout>
      <SEO title="Main" description="123" />

      <div className="flex justify-center gap-x-4 mt-8">
        <TextField
          className="bg-white w-3/5 "
          variant="outlined"
          onChange={handleSearchChange}
          placeholder={"輸入學校中文或英文名稱"}
          value={search}
        />
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
            schoolTypesList.find((ele) => ele.value === data.schoolTypeId)
              ?.title ?? ""
          return (
            <Link key={data.id} href={`/school/tertiary/${data.id}`}>
              <a key={data.id}>
                <SchoolsReviewCards
                  key={data.id}
                  id={data.id}
                  schoolChineseName={data.schoolChineseName}
                  schoolEnglishName={data.schoolEnglishName}
                  totalReports={data.totalReports}
                  type={title}
                  schoolShortName={data.schoolShortName}
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

// export async function getServerSideProps() {
//   const queryClient = new QueryClient()

//   // await queryClient.prefetchQuery("posts", fetchTodoList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     }
//   }
// }
export default Home
