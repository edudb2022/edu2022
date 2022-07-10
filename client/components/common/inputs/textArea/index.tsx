import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material"
import React from "react"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

export interface IBaseTextAreaProps
  extends TextareaAutosizeProps,
    IInputContainerProps {
  valueLength?: number
}

const BaseTextArea: React.FunctionComponent<IBaseTextAreaProps> = ({
  isTouched,
  errorMessages,
  className,
  valueLength,
  header,
  headerRequired,
  inputContainerClassName,
  subHeader,
  ...props
}) => {
  return (
    <InputContainer
      isTouched={isTouched}
      errorMessages={errorMessages}
      header={header}
      headerRequired={headerRequired}
      inputContainerClassName={inputContainerClassName}
      subHeader={subHeader}
    >
      <div className="relative">
        <TextareaAutosize
          className={` p-2 ring-none border-2 w-full ${className}`}
          {...props}
        />
        {/* {valueLength && ( */}
        <div className="absolute right-3 bottom-5 text-theme-three-500">
          {`${valueLength}/255`}
        </div>
        {/* )} */}
      </div>
    </InputContainer>
  )
}

export default BaseTextArea
