import React from "react"
import ReviewBaseItem, { IReviewBaseItemProps } from "."
import CountUp from "react-countup"

interface IReviewSalaryItemProps extends IReviewBaseItemProps {
  title: string

  subtitle?: string
  salary: number
}

const ReviewSalaryItem: React.FunctionComponent<IReviewSalaryItemProps> = ({
  title,
  subtitle,
  salary
}) => {
  return (
    <ReviewBaseItem title={title} subtitle={subtitle}>
      <h6 className="text-xl">
        <CountUp
          start={0}
          end={salary}
          duration={2}
          separator=","
          suffix="HKD"
        />
      </h6>
    </ReviewBaseItem>
  )
}

export default ReviewSalaryItem
