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
      // header="標題"
      label="標題"
      // headerRequired={true}
      name="title"
      className={` ${className}`}
      {...props}
    />
  )
}

export default TitleTextInput
