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
      placeholder="為你的評價/情報改一個令人深刻印象的標題吧！！！"
      className={` ${className}`}
      {...props}
      isRequired
    />
  )
}

export default TitleTextInput
