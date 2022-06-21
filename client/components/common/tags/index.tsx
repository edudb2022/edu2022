import React from "react"

export interface IBaseTagProps {
  title: string
  secondary?: boolean
  // color: string
  rating?: number
  className?: string
  ratingClassName?: string
}

//     <div className={`${secondary ?  `border-2 boder-${color} text-${color}` : `boder-${color} bg-${color}` } ${className}`}>{title}</div>
// }

const BaseTag: React.FunctionComponent<IBaseTagProps> = ({
  title,
  secondary,
  rating,
  // color,
  className,
  ratingClassName
}) => {
  return (
    <div
      className={`rounded-2xl flex flex-row items-center  max-w-fit ${className}`}
    >
      {rating && (
        <span className={` px-2 rounded-2xl  ${ratingClassName}`}>
          {rating}
        </span>
      )}

      <div className="min-w-full px-1 pr-3 "> {title}</div>
    </div>
  )
}

export default BaseTag
