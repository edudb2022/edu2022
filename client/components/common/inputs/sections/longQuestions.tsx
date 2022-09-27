import React from "react"
import InputHeader, { IInputHeaderProps } from "../../header/input"
import BaseTextArea, { IBaseTextAreaProps } from "../textArea"

interface ILongQuestionsSectionProps
  extends Partial<IBaseTextAreaProps>,
    IInputHeaderProps {}

const LongQuestionsSection: React.FunctionComponent<
  ILongQuestionsSectionProps
> = ({
  className,
  isTouched,
  errorMessages,
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
        <BaseTextArea
          isTouched={isTouched}
          errorMessages={errorMessages}
          maxLength={3000}
          className={` border-2 rounded-lg bg-theme-one-50  focus:outline-theme-one-500 border-none ${className}`}
          minRows={7}
          {...props}
        />
      </div>
    </div>
  )
}

export default LongQuestionsSection
