import React from "react"
import { Radar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
)

interface IBaseRadarProps {
  labels: string[]
  scores: Number[]
  className?: string
}

const BaseRadar: React.FunctionComponent<IBaseRadarProps> = ({
  labels,
  scores,
  className
}) => {
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        pointLabels: {
          font: {
            size: 14
          }
        }
      }
    }
  }

  //   const labels = ["January", "February", "March", "April", "May"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "abc",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",

        data: scores
      }
    ]
  }
  return <Radar data={data} className={`${className}`} options={options} />
}

export default BaseRadar
