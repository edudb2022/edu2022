import React from "react"
import BasePieChart, { IBasePieChartProps } from "."

export interface IInternshipPeiChartProps extends Partial<IBasePieChartProps> {}

const InternshipPeiChart: React.FunctionComponent<IInternshipPeiChartProps> = ({
  statistic
}) => {
  return (
    <BasePieChart
      statistic={statistic!}
      labels={["Summer", "Winter", "Placement"]}
      colors={["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]}
    />
  )
}

export default InternshipPeiChart
