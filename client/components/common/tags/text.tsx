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
    | "themeOne"
}

const TextTag: React.FunctionComponent<ITextTagProps> = ({
  title,
  type,
  ...props
}) => {
  const colorMapper = {
    admission: "bg-purple-200 text-purple-900",
    offer_type: "bg-orange-200 text-orange-900",
    admission_year: "bg-gray-200 text-gray-900",
    year_of_study: "bg-teal-500 text-teal-900",
    summer: "bg-rose-200 text-rose-800",
    winter: "bg-sky-200 text-gray-800",
    placement: "bg-yellow-200 text-yellow-900",
    themeOne: "bg-theme-one-50 text-theme-one-500"
  }

  return <BaseTag title={title} className={colorMapper[type]} {...props} />
}

export default TextTag
