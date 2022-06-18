import React from "react"
import { Pie } from "react-chartjs-2"
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

const options: any = {
  plugins: {
    legend: {
      position: "right"
      // display: false,
    }
  }
}

export interface IBasePieChartProps {
  labels: string[]
  statistic: number[]
  colors: string[]
}
const BasePieChart: React.FunctionComponent<IBasePieChartProps> = ({
  labels,
  statistic,
  colors
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: statistic,
        backgroundColor: colors
      }
    ]
  }
  return <Pie data={data} options={options} />
}

export default BasePieChart
