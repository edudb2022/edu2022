import { TextField } from "@mui/material"
import type { NextPage } from "next"
import { ChangeEventHandler, useState } from "react"
import BaseTextInput from "../components/common/inputs/text"

import SchoolsPanel from "../components/common/panel/schools"
import BaseSelect from "../components/common/select"
import { SCHOOL_TYPE } from "../types/common"

const schoolsType = [
  { value: SCHOOL_TYPE.UNIVERSITY, title: "大學" },
  { value: SCHOOL_TYPE.COLLEGE, title: "大專" },
]

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

  return (
    <div className="bg-theme-two-500 ">
      <div className="p-2">
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

        <div className="flex justify-center mt-4">
          <SchoolsPanel searchText={search} />
        </div>
      </div>
    </div>
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
