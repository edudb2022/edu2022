import type { NextPage } from "next";

import GradJobOfferReviewCard from "../components/common/cards/review/gradJob";

import SchoolsPanel from "../components/common/panel/schools";

const Home: NextPage = () => {
  // const { data, isLoading, isFetching } = useQuery("posts", fetchTodoList, {
  //   // refetchOnWindowFocus: false,
  //   staleTime: 0,
  // });
  // console.log(data, isLoading, isFetching);

  return (
    <div>
      {/* <AdmissionOfferReviewCard
        id={"123"}
        schoolChineseName={"123"}
        schoolEnglishName={"123"}
        schoolShortName={"HKU"}
        totalReports={123}
        jupasBestFiveValue={11}
        jupasBestSixValue={22}
        nonJupasBestFiveValue={33}
        nonJupasBestGpaValue={3.3}
      /> */}

      <GradJobOfferReviewCard
        salary={22000 * 12}
        schoolShortName={"owe"}
        schoolChineseName={"123"}
        schoolEnglishName={"123"}
        totalReports={123}
        type={"123"}
        id={"21"}
      />
      <div className="p-2">
        <div className="flex justify-center">
          {/* <SearchTextInput variant="outlined" /> */}
        </div>
        <SchoolsPanel />
      </div>
    </div>
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
