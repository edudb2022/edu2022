import React, { useEffect, useState } from "react"
import BaseTag, { IBaseTagProps } from "."

interface ITextTagProps extends IBaseTagProps {
  type:
    | "admission"
    | "offer_type"
    | "admission_year"
    | "winter"
    | "summer"
    | "placement"
    | "year_of_study"
}

const TextTag: React.FunctionComponent<ITextTagProps> = ({
  title,
  type,
  ...props
}) => {
  // const [style, setStyle] = useState("")

  // useEffect(() => {
  //   if (type === "admission") {
  //     setStyle("bg-purple-200 text-purple-900")
  //   }
  //   if (type === "offer_type") {
  //     setStyle("bg-orange-200 text-orange-900")
  //   }

  //   if (type === "admission_year") {
  //     setStyle("bg-gray-200 text-gray-900")
  //   }

  //   if (type === "summer") {
  //     setStyle("bg-rose-200 text-rose-800")
  //   }

  //   if (type === "winter") {
  //     setStyle("bg-sky-200 text-gray-800")
  //   }

  //   if (type === "placement") {
  //     setStyle("bg-yellow-200 text-yellow-900")
  //   }
  // }, [type])

  const colorMapper = {
    admission: "bg-purple-200 text-purple-900",
    offer_type: "bg-orange-200 text-orange-900",
    admission_year: "bg-gray-200 text-gray-900",
    year_of_study: "bg-teal-500 text-teal-900",
    summer: "bg-rose-200 text-rose-800",
    winter: "bg-sky-200 text-gray-800",
    placement: "bg-yellow-200 text-yellow-900"
  }
  //   const style = [
  //     { type: "admission", style: "bg-purple-200 text-purple-900" },
  //     { type: "offer_type", style: "bg-blue-200 text-blue-900" },
  //     { type: "admission_year", style: "bg-teal-200 text-teal-900" }
  //   ]
  return <BaseTag title={title} className={colorMapper[type]} {...props} />
}

export default TextTag
