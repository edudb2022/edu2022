import type { NextPage } from "next";

import HeaderBar from "../components/common/bars/header";
import GpaSlider from "../components/common/inputs/slider/gpa";
import SearchTextInput from "../components/common/inputs/text/search";

import SearchInput from "../components/common/inputs/text/search";

import SchoolsPanel from "../components/common/panel/schools";

// const fetchTodoList = () => {
//   // return axios.get("https://random-data-api.com/api/address/random_address");
//   return fetch("https://random-data-api.com/api/address/random_address").then(
//     (res) => res.json()
//   );
// };

const Home: NextPage = () => {
  // const { data, isLoading, isFetching } = useQuery("post", fetchTodoList, {
  //   // refetchOnWindowFocus: false,
  //   staleTime: 0,
  // });
  // console.log(data, isLoading, isFetching);

  // const aa = (e) =>{
  //   console.log(e.target.value)}
  // }

  return (
    <>
      <HeaderBar />
      <div className="p-2">
        <div className="flex justify-center">
          <SearchTextInput />
        </div>
        <SchoolsPanel />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery("posts", fetchTodoList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
export default Home;
