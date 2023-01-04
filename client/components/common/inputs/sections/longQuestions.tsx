import React from "react"
import InputHeader, { IInputHeaderProps } from "../../header/input"
import UpArrowIcon from "../../icons/upArrow"
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

      <div className="hidden md:flex flex-row justify-end w-full text-gray-500">
        <p className="text-end p-0 font-normal">可以拉長的！</p>
        <div className="animate-bounce">
          <UpArrowIcon />
        </div>
      </div>
    </div>
  )
}

export default LongQuestionsSection
