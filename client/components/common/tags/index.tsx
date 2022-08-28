import React from "react"

export interface IBaseTagProps {
  title: string
  rating?: number
  className?: string
  ratingClassName?: string
  titleClassName?: string
  header?: string
}

const BaseTag: React.FunctionComponent<IBaseTagProps> = ({
  title,
  rating,
  header,
  className,
  ratingClassName,
  titleClassName
}) => {
  return (
    <div className={`flex flex-col w-fit items-center rounded-2xl`}>
      {header && <p className="text-mb text-gray-400 mb-0 ">{header}</p>}
      <div className={` flex flex-row items-center rounded-2xl ${className}`}>
        {rating! >= 0 && (
          <div className={` px-2 rounded-2xl border-2  ${ratingClassName}`}>
            {rating}
          </div>
        )}

        <div
          className={`max-w-full items-center  md:text-base ${titleClassName} ${
            !rating ? "px-4 py-[2px]" : "px-2"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  )
}

export default BaseTag
