import type { NextPage } from "next";
import { Radar } from "react-chartjs-2";

import { dehydrate, QueryClient } from "react-query";

import HeaderBar from "../components/common/bars/header";
import SignInButton from "../components/common/buttons/auth/signIn";

import SearchTextInput from "../components/common/inputs/text/search";

import SchoolsPanel from "../components/common/panel/schools";

// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// );

// const fetchTodoList = async () => {
//   // return axios.get("https://random-data-api.com/api/address/random_address");
//   return await fetch(
//     "https://random-data-api.com/api/address/random_address"
//   ).then((res) => res.json());
// };

// const labels = ["January", "February", "March", "April", "May", "June"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };
const Home: NextPage = () => {
  // const { data, isLoading, isFetching } = useQuery("posts", fetchTodoList, {
  //   // refetchOnWindowFocus: false,
  //   staleTime: 0,
  // });
  // console.log(data, isLoading, isFetching);

  return (
    <>
      <HeaderBar />

      <div className="p-2">
        <div className="flex justify-center">
          <SearchTextInput variant="outlined" />
        </div>
        <SchoolsPanel />
        {/* <Radar
          //   options={...}
          data={data}
        /> */}
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   // await queryClient.prefetchQuery("posts", fetchTodoList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
export default Home;
