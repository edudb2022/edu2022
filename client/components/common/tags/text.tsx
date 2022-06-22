import React, { useEffect, useState } from "react"
import BaseTag, { IBaseTagProps } from "."

interface ITextTagProps extends IBaseTagProps {
  type: "admission" | "offer_type" | "admission_year"
}

const TextTag: React.FunctionComponent<ITextTagProps> = ({
  title,
  type,
  ...props
}) => {
  const [style, setStyle] = useState("")

  useEffect(() => {
    if (type === "admission") {
      setStyle("bg-purple-200 text-purple-900")
    }
    if (type === "offer_type") {
      setStyle("bg-blue-200 text-blue-900")
    }

    if (type === "admission_year") {
      setStyle("bg-teal-200 text-teal-900")
    }
  }, [type])

  //   const style = [
  //     { type: "admission", style: "bg-purple-200 text-purple-900" },
  //     { type: "offer_type", style: "bg-blue-200 text-blue-900" },
  //     { type: "admission_year", style: "bg-teal-200 text-teal-900" }
  //   ]
  return <BaseTag title={title} className={style} {...props} />
}

export default TextTag
