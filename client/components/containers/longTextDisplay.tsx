import React from "react"

interface ILongTextDisplayContainerProps {
  content: string | null
  className?: string
  title: string
}

const LongTextDisplayContainer: React.FunctionComponent<
  ILongTextDisplayContainerProps
> = ({ content, className, title }) => {
  const text = content || "no text"
  return (
    <div className={`bg-theme-one-50 p-8 rounded-2xl ${className}`}>
      <h5 className="text-theme-one-500">{title}</h5>
      {content ? (
        <div className="mt-4">{content}</div>
      ) : (
        <div className="text-center">no content</div>
      )}
    </div>
  )
}

export default LongTextDisplayContainer
