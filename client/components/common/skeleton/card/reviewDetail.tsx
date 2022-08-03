import { Skeleton } from "@mui/material"
import React from "react"
import BaseCard from "../../cards"

const ReviewDetailSkeletonCard: React.FunctionComponent = () => {
  return (
    <BaseCard className={`w-full flex flex-row justify-around  border-black  `}>
      <div className="flex flex-col w-4/5 h-full justify-between">
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="rectangular" animation="wave" className="h-3/5" />
        <Skeleton variant="text" animation="wave" />
      </div>

      <div className="flex justify-center items-center w-1/5">
        <Skeleton
          variant="circular"
          animation="wave"
          className="w-12 h-12 md:w-24 md:h-24"
        />
      </div>
    </BaseCard>
  )
}

export default ReviewDetailSkeletonCard
