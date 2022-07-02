import React from "react"
import LongTextDisplayContainer from "../../../containers/longTextDisplay"
import BaseTextArea, { IBaseTextAreaProps } from "../textArea"

interface ILongQuestionsSectionProps extends Partial<IBaseTextAreaProps> {
  title: string

  content?: string
}

const LongQuestionsSection: React.FunctionComponent<
  ILongQuestionsSectionProps
> = ({ title, className, isTouched, errorMessages, content, ...props }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="mt-4">
        {content ? (
          <LongTextDisplayContainer
            content=" 123 
            123 "
          />
        ) : (
          <BaseTextArea
            isTouched={isTouched}
            errorMessages={errorMessages}
            className={`rounded-lg bg-[#F8FAFC] border-2 ${className}`}
            {...props}
          />
        )}
      </div>
    </div>
  )
}

export default LongQuestionsSection
