import React, { useState, useEffect } from "react"
import BaseTag, { IBaseTagProps } from "."

interface IRantingTagProps extends IBaseTagProps {
  title: string
  ranting: number
}

const RantingTag: React.FunctionComponent<IRantingTagProps> = ({
  title,
  className,
  ranting
}) => {
  const color = [
    `bg-ranking-1-200 text-ranking-1-700`,
    `bg-ranking-2-200 text-ranking-2-700`,
    `bg-ranking-3-200 text-ranking-4-700`,
    `bg-ranking-4-200 text-ranking-4-700`,
    `bg-ranking-5-200 text-ranking-5-700`
  ]

  return (
    <BaseTag title={title} className={` ${color[ranting - 1]} ${className}`} />
  )
}

export default RantingTag
