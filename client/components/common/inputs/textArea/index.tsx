import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material";
import React from "react";
import ErrorMessage, { IErrorMessageProps } from "../../messages/error";

export interface IBaseTextAreaProps
  extends TextareaAutosizeProps,
    IErrorMessageProps {}

const BaseTextArea: React.FunctionComponent<IBaseTextAreaProps> = ({
  isTouched,
  errorMessages,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <TextareaAutosize
        className={` p-2 ring-none border-2 ${className}`}
        {...props}
      />

      {/* <textarea className={` p-2  border-2 ${className}`} {...props} /> */}

      <div className="flex justify-end">
        <ErrorMessage isTouched={isTouched} errorMessages={errorMessages} />
      </div>
    </div>
  );
};

export default BaseTextArea;
