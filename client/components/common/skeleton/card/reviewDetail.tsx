import { Skeleton } from "@mui/material"
import React from "react"

const ReviewDetailSkeletonCard: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <Skeleton variant="rectangular" animation="wave" height={150} />
    </div>
  )
}

export default ReviewDetailSkeletonCard
