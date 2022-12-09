import React, { PropsWithChildren } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import ReviewDetailSkeletonCardGroup from "../groups/skeleton/ReviewDetail"

interface IBaseInfiniteScrollProps {
  dataLength: number
  fetchMoreData: () => void
  hasMore: boolean
  isLoading?: boolean
  //   refresh: () => void
}

const BaseInfiniteScroll: React.FunctionComponent<
  PropsWithChildren<IBaseInfiniteScrollProps>
> = ({ dataLength, fetchMoreData, hasMore, children, isLoading }) => {
  const MessageContainer: React.FunctionComponent<{ text: string }> = ({
    text
  }) => {
    return (
      <div className="flex flex-row justify-center mt-4">
        <h4 className="text-theme-one-500 bg-theme-one-50 px-12 py-2 rounded-full">
          {text}
        </h4>
      </div>
    )
  }

  return isLoading ? (
    <ReviewDetailSkeletonCardGroup />
  ) : (
    <InfiniteScroll
      dataLength={dataLength} //This is important field to render the next data
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<MessageContainer text="請等等..." />}
      endMessage={<MessageContainer text="冇晒了!" />}
    >
      {children}
    </InfiniteScroll>
  )
}

export default BaseInfiniteScroll
