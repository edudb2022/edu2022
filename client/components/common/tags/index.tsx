import React from "react"

export interface IBaseTagProps {
  title: string
  secondary?: boolean
  // color: string
  className?: string
}

//     <div className={`${secondary ?  `border-2 boder-${color} text-${color}` : `boder-${color} bg-${color}` } ${className}`}>{title}</div>
// }

const BaseTag: React.FunctionComponent<IBaseTagProps> = ({
  title,
  secondary,
  // color,
  className
}) => {
  return (
    <div className={`rounded-2xl px-7 text-center ${className}`}>{title}</div>
  )
}

export default BaseTag
