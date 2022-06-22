import { Paper } from "@mui/material"
import React from "react"
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

      {isDisplay ? (
        <Paper>123</Paper>
      ) : (
        <BaseTextArea
          isTouched={isTouched}
          errorMessages={errorMessages}
          className={className}
          {...props}
        />
      )}
    </div>
  )
}

export default LongQuestionsSection
