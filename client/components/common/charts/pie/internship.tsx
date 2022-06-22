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
      colors={["#fb7185", "#38bdf8", "#facc15"]}
    />
  )
}

export default InternshipPeiChart
