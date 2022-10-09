import React from "react"
import BaseTextInput from "."
import { IBaseInputTextProps } from "."

type ITitleTextInputProps = IBaseInputTextProps & {
  className?: string
  valueLength?: number
  maxLength?: number
}

const TitleTextInput: React.FunctionComponent<ITitleTextInputProps> = ({
  className,
  valueLength,
  maxLength,
  ...props
}) => {
  return (
    <div className="relative">
      <BaseTextInput
        // header="標題"
        label="標題"
        // headerRequired={true}
        name="title"
        className={` ${className}`}
        {...props}
        isRequired
      />
      <div className="absolute right-3 top-18 text-theme-three-500">
        {`${valueLength}/${maxLength}`}
      </div>
    </div>
  )
}

export default TitleTextInput
