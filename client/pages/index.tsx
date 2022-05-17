import type { NextPage } from "next";

import HeaderBar from "../components/common/bars/header";

import SearchInput from "../components/common/inputs/base/search";
import SchoolsPanel from "../components/common/panel/schools";

// const fetchTodoList = () => {
//   return axios
//     .get("https://random-data-api.com/api/address/random_address")
//     .then((res) => res.json());
// };

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

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery("posts", fetchTodoList, {
//     // staleTime: 300000,
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
export default Home;
