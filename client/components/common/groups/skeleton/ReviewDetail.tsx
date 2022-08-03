import React from "react"
import ReviewDetailSkeletonCard from "../../skeleton/card/reviewDetail"

const ReviewDetailSkeletonCardGroup: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <ReviewDetailSkeletonCard />
      <ReviewDetailSkeletonCard />
      <ReviewDetailSkeletonCard />
    </div>
  )
}

export default ReviewDetailSkeletonCardGroup
