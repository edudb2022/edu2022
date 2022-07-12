import React from "react"
import InputContainer from "../../../containers/input"
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
  headerClassName,
  subHeaderClassName,
  ...props
}) => {
  return (
    <div>
      <InputHeader
        header={header}
        headerRequired={headerRequired}
        subHeader={subHeader}
        headerClassName={headerClassName}
        subHeaderClassName={subHeaderClassName}
      />

      <div>
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
