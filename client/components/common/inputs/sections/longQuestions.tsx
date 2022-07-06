import React from "react"
import LongTextDisplayContainer from "../../../containers/longTextDisplay"
import InputHeader, { IInputHeaderProps } from "../../header/input"
import BaseTextArea, { IBaseTextAreaProps } from "../textArea"

interface ILongQuestionsSectionProps
  extends Partial<IBaseTextAreaProps>,
    IInputHeaderProps {
  content?: string
}

const LongQuestionsSection: React.FunctionComponent<
  ILongQuestionsSectionProps
> = ({
  className,
  isTouched,
  errorMessages,
  content,
  header,
  headerRequired,
  subHeader,
  ...props
}) => {
  return (
    <div>
      <InputHeader
        header={header}
        headerRequired={headerRequired}
        subHeader={subHeader}
      />

      <div className="mt-4">
        {content ? (
          <LongTextDisplayContainer content={content} />
        ) : (
          <BaseTextArea
            isTouched={isTouched}
            errorMessages={errorMessages}
            maxLength={255}
            className={` bg-[#F8FAFC] border-2 ${className}`}
            minRows={7}
            {...props}
          />
        )}
      </div>
    </div>
  )
}

export default LongQuestionsSection
