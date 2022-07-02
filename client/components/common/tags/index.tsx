import React from "react"

export interface IBaseTagProps {
  title: string
  rating?: number
  className?: string
  ratingClassName?: string
  header?: string
}

const BaseTag: React.FunctionComponent<IBaseTagProps> = ({
  title,
  rating,
  header,
  className,
  ratingClassName
}) => {
  return (
    <div className={`flex flex-col w-fit items-center rounded-2xl `}>
      {header && <h6>{header}</h6>}
      <div className={` flex flex-row items-center rounded-2xl ${className}`}>
        {rating! >= 0 && (
          <div className={` px-2 rounded-2xl border-2  ${ratingClassName}`}>
            {rating}
          </div>
        )}

        <div
          className={`max-w-full items-center  ${
            !rating ? "px-4 py-[2px]" : "px-4"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  )
}

export default BaseTag
