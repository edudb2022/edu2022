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
  const color = `bg-ranking-${ranking}-200 text-ranking-${ranking}-700`

  return <BaseTag title={title} className={` ${color} ${className}`} />
}

export default RankingTag
