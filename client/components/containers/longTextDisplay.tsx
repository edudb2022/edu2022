import React from "react"

interface ILongTextDisplayContainerProps {
  content: string
  className?: string
}

const LongTextDisplayContainer: React.FunctionComponent<
  ILongTextDisplayContainerProps
> = ({ content, className }) => {
  return (
    <div
      className={`border-2 border-dashed border-black md:p-6 p-3 rounded-lg whitespace-pre-line md:text-base text-sm  ${className}`}
    >
      {content}
    </div>
  )
}

export default LongTextDisplayContainer
