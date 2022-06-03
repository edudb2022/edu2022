import React from "react";
import BaseTextArea, { IBaseTextAreaProps } from "../inputs/textArea";

interface ILongQuestionsSectionProps extends IBaseTextAreaProps {
  title: string;
}

const LongQuestionsSection: React.FunctionComponent<
  ILongQuestionsSectionProps
> = ({ title, className, isTouched, errorMessages, ...props }) => {
  return (
    <div>
      <h1>{title}</h1>
      <BaseTextArea
        isTouched={isTouched}
        errorMessages={errorMessages}
        className={className}
        {...props}
      />
    </div>
  );
};

export default LongQuestionsSection;
