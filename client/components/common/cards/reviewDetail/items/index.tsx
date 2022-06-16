import React, { PropsWithChildren } from "react"

export interface IReviewBaseItemProps {
  title: string
  subtitle?: string
}

const ReviewBaseItem: React.FunctionComponent<
  PropsWithChildren<IReviewBaseItemProps>
> = ({ title, subtitle, children }) => {
  return (
    <div className="border-2 text-center">
      <p className="text-xs text-gray-400">{title}</p>
      {children}
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default ReviewBaseItem
