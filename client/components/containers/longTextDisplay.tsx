import React from "react"

interface ILongTextDisplayContainerProps {
  content: string
  className?: string
  title: string
}

const LongTextDisplayContainer: React.FunctionComponent<
  ILongTextDisplayContainerProps
> = ({ content, className, title }) => {
  return (
    <div className={`bg-theme-one-50 p-8 rounded-2xl ${className}`}>
      <h5 className="text-theme-one-500">{title}</h5>
      {content}
    </div>
  )
}

export default LongTextDisplayContainer
