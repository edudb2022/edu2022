import { Paper } from "@mui/material"
import React from "react"
import LongTextDisplayContainer from "../../containers/longTextDisplay"
import BaseTextArea, { IBaseTextAreaProps } from "../inputs/textArea"

interface ILongQuestionsSectionProps extends Partial<IBaseTextAreaProps> {
  title: string
  isDisplay?: boolean
}

const LongQuestionsSection: React.FunctionComponent<
  ILongQuestionsSectionProps
> = ({ title, className, isTouched, errorMessages, isDisplay, ...props }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="mt-4">
        {isDisplay ? (
          <LongTextDisplayContainer
            content=" 123 
            123 "
          />
        ) : (
          <BaseTextArea
            isTouched={isTouched}
            errorMessages={errorMessages}
            className={className}
            {...props}
          />
        )}
      </div>
    </div>
  )
}

export default LongQuestionsSection
