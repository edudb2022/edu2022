import React from "react"

export interface IBaseTagProps {
  title: string
  secondary?: boolean
  // color: string
  rating?: number
  className?: string
  ratingClassName?: string
  header?: string
}

//     <div className={`${secondary ?  `border-2 boder-${color} text-${color}` : `boder-${color} bg-${color}` } ${className}`}>{title}</div>
// }

const BaseTag: React.FunctionComponent<IBaseTagProps> = ({
  title,
  secondary,
  rating,
  // color,
  header,
  className,
  ratingClassName
}) => {
  return (
    <div className={`flex flex-col w-fit items-center rounded-2xl max-w-fit`}>
      {header && <h6>{header}</h6>}
      <div className={` flex flex-row items-center rounded-2xl ${className}`}>
        {rating && (
          <span className={` px-2 rounded-2xl border-2 ${ratingClassName}`}>
            {rating}
          </span>
        )}

        <div className="min-w-fit px-1 pr-3 "> {title}</div>
      </div>
    </div>
  )
}

export default BaseTag
