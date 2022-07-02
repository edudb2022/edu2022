import React from "react"
import BaseSelect, { IBaseSelectProps } from "."

interface IReviewSelectProps extends Partial<IBaseSelectProps> {}

const ReviewSelect: React.FunctionComponent<IReviewSelectProps> = ({
  selectValue,
  isTouched,
  errorMessages,
  ...props
}) => {
  const options = [
    {
      value: "123",
      title: "123"
    }
  ]
  return (
    <BaseSelect
      isTouched={isTouched}
      errorMessages={errorMessages}
      items={options}
      selectValue={selectValue!}
      {...props}
    />
  )
}

export default ReviewSelect
