import { TextField } from "@mui/material"
import type { NextPage } from "next"
import { ChangeEventHandler, useState } from "react"
import BaseTextInput from "../components/common/inputs/text"

import SchoolsPanel from "../components/common/panel/schools"
import BaseSelect from "../components/common/select"
import PageLayout from "../components/layouts/page"
import { SCHOOL_TYPE } from "../types/common"

const schoolsType = [
  { value: SCHOOL_TYPE.UNIVERSITY, title: "大學" },
  { value: SCHOOL_TYPE.COLLEGE, title: "大專" }
]

// import dynamic from "next/dynamic"
// import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
// import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword"

const Home: NextPage = (props) => {
  // const { data, isLoading, isFetching } = useQuery("posts", fetchTodoList, {
  //   // refetchOnWindowFocus: false,
  //   staleTime: 0,
  // });
  // console.log(data, isLoading, isFetching);

  const [type, setType] = useState(SCHOOL_TYPE.UNIVERSITY)
  const [search, setSearch] = useState("")

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
  }

  // console.log(
  //   process.env.NEXT_PUBLIC_SUPERTOKEN_URL,
  //   process.env.NEXT_PUBLIC_SUPERTOKEN_API_KEY,
  //   123
  // )
  // const EmailPasswordAuthNoSSR = dynamic(
  //   new Promise<typeof EmailPassword.EmailPasswordAuth>((res) =>
  //     res(EmailPassword.EmailPasswordAuth)
  //   ),
  //   { ssr: false }
  // )

  return (
    // <EmailPasswordAuthNoSSR>
    //   <EmailPasswordAuth>
    <PageLayout>
      <div className="flex justify-center gap-x-4">
        <TextField
          className="bg-white w-3/5 "
          variant="outlined"
          onChange={handleSearchChange}
          placeholder={"輸入學校中文或英文名稱"}
          value={search}
        />
        <BaseSelect
          items={schoolsType}
          selectValue={type}
          selectClassName="bg-white  px-2"
          onChange={handleTypeChange}
        />
      </div>

      <SchoolsPanel searchText={search} currentIndex={type} />
    </PageLayout>
  )
}

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   // await queryClient.prefetchQuery("posts", fetchTodoList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
export default Home
