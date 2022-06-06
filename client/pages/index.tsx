import type { NextPage } from "next";
import AdmissionOfferReviewCard from "../components/common/cards/review/admissionOffer";
import InternshipReviewCard from "../components/common/cards/review/internship";
import BasePieChart from "../components/common/charts/pie";

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
