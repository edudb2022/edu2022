import { ErrorMessageProps } from "formik"
import React, { PropsWithChildren } from "react"
import InputHeader, { IInputHeaderProps } from "../common/header/input"
import ErrorMessage, { IErrorMessageProps } from "../common/messages/error"

export interface IInputContainerProps
  extends IInputHeaderProps,
    IErrorMessageProps {
  inputContainerClassName?: string
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
  isTouched
}) => {
  return (
    <div className={`flex flex-col ${inputContainerClassName}`}>
      <InputHeader
        header={header}
        headerRequired={headerRequired}
        subHeader={subHeader}
      />
      {children}
      <div className="flex justify-end">
        <ErrorMessage isTouched={isTouched} errorMessages={errorMessages} />
      </div>
    </div>
  )
}

export default InputContainer
