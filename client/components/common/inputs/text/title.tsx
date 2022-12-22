import React from "react"
import BaseTextInput from "."
import { IBaseInputTextProps } from "."

type ITitleTextInputProps = IBaseInputTextProps & {
  className?: string
}

const TitleTextInput: React.FunctionComponent<ITitleTextInputProps> = ({
  className,

  ...props
}) => {
  return (
    <BaseTextInput
      label="標題"
      name="title"
      className={` ${className}`}
      {...props}
      isRequired
    />
  )
}

export default TitleTextInput
