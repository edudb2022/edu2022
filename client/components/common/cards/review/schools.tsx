import React from "react";
import { Radar } from "react-chartjs-2";
import BaseReviewCard, { IBaseReviewCardProps } from ".";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  //   plugins: {
  //     legend: {
  //       labels: {
  //         // This more specific font property overrides the global property
  //         font: {
  //           size: "12rem",
  //         },
  //       },
  //       font: {
  //         size: "120rem",
  //       },
  //     },

  //   },

  //   maintainAspectRatio: false,
  //   plugins: {
  //     labels: {
  //       // This more specific font property overrides the global property
  //       font: {
  //         size: 114,
  //       },
  //     },
  //   },
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      //   top: 0,
      //   left: 40,
      //   right: 40,
      //   bottom: 70,
    },
  },

  scales: {
    r: {
      suggestedMin: 1,
      suggestedMax: 5,
    },
  },
};
interface ISchoolsCardsProps extends IBaseReviewCardProps {}

const labels = ["January", "February", "March", "April", "May"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "abc",

      backgroundColor: "rgba(54, 162, 235)",
      borderColor: "rgb(255, 99, 0)",
      data: [1, 5, 3, 4, 2, 1.2],
    },
  ],
};

const SchoolsCards: React.FunctionComponent<ISchoolsCardsProps> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  schoolTypes,
  id,
}) => {
  return (
    <BaseReviewCard
      id={id}
      schoolChineseName={schoolChineseName}
      schoolEnglishName={schoolEnglishName}
      schoolShortName={schoolShortName}
      totalReports={totalReports}
      schoolTypes={schoolTypes}
    >
      <div className="absolute top-0 h-full w-full  px-8 py-4 md:p-4 border-2">
        <Radar data={data} className="" options={options} />
      </div>
    </BaseReviewCard>
  );
};

export default SchoolsCards;
