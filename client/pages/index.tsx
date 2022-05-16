import axios from "axios";

import type { NextPage } from "next";
import { useEffect } from "react";
import { dehydrate, QueryClient, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

import HeaderBar from "../components/common/bars/header";

import SearchInput from "../components/common/inputs/base/search";
import SchoolsPanel from "../components/common/panel/schools";
import rootActions from "../state/actions";

// const fetchTodoList = () => {
//   return axios.get("https://random-data-api.com/api/address/random_address");
// };
// const { data } = useQuery("todos", fetchTodoList);

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <div className="p-2">
        <div className="flex justify-center">
          <SearchInput />
        </div>
        <SchoolsPanel />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery("posts", fetchTodoList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Home;
