import React from "react";
import { boolean } from "yup";

export interface IErrorMessageProps {
  isTouched: boolean | undefined;
  errorMessages: string | undefined;
}

const ErrorMessage: React.FunctionComponent<IErrorMessageProps> = ({
  isTouched,
  errorMessages,
}) => {
  return (
    <>
      {isTouched && errorMessages ? (
        <p className="text-red-500">{errorMessages}</p>
      ) : null}
    </>
  );
};

export default ErrorMessage;
