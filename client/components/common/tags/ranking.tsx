import React, { useState, useEffect } from "react"
import BaseTag, { IBaseTagProps } from "."

interface RankingTagProps extends IBaseTagProps {
  title: string
  ranking: number
}

const RankingTag: React.FunctionComponent<RankingTagProps> = ({
  title,
  className,
  ranking
}) => {
  const color = [
    "bg-ranking-rose-200 text-ranking-rose-800",
    "bg-ranking-pink-200 text-ranking-pink-700",
    "bg-ranking-yellow-200 text-ranking-yellow-700",
    "bg-ranking-teal-200 text-ranking-teal-700",
    "bg-ranking-green-200 text-ranking-green-700"
  ]

  //   const color = `bg-ranking-${ranking}-200 text-ranking-${ranking}700`

  return (
    <BaseTag title={title} className={` ${color[ranking - 1]} ${className}`} />
  )
}

export default RankingTag
