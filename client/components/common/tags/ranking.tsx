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
    `bg-ranking-1-200 text-ranking-1-700`,
    `bg-ranking-2-200 text-ranking-2-700`,
    `bg-ranking-3-200 text-ranking-4-700`,
    `bg-ranking-4-200 text-ranking-4-700`,
    `bg-ranking-5-200 text-ranking-5-700`
  ]

  return (
    <BaseTag title={title} className={` ${color[ranking - 1]} ${className}`} />
  )
}

export default RankingTag
