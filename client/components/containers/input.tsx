import { ErrorMessageProps } from "formik"
import React, { PropsWithChildren } from "react"
import InputHeader, { IInputHeaderProps } from "../common/header/input"
import ErrorMessage, { IErrorMessageProps } from "../common/messages/error"

export interface IInputContainerProps
  extends IInputHeaderProps,
    IErrorMessageProps {
  inputContainerClassName?: string
  helpText?: string
}

const InputContainer: React.FunctionComponent<
  PropsWithChildren<IInputContainerProps>
> = ({
  header,
  headerRequired,
  subHeader,
  children,
  errorMessages,
  inputContainerClassName,
  helpText,
  isTouched,
  headerContainerClassName
}) => {
  return (
    <div className={`flex flex-col ${inputContainerClassName}`}>
      <InputHeader
        header={header}
        headerRequired={headerRequired}
        subHeader={subHeader}
        headerContainerClassName={headerContainerClassName}
      />
      {children}
      <div className="flex flex-row justify-between items-center px-2">
        <p className="text-xs font-thin">{helpText}</p>
        <ErrorMessage isTouched={isTouched} errorMessages={errorMessages} />
      </div>
    </div>
  )
}

export default InputContainer
