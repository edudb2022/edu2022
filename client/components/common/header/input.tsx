import React, { PropsWithChildren } from "react"
import { boolean } from "yup"

export interface IInputHeaderProps {
  header?: string
  headerRequired?: boolean
  subHeader?: string
  headerClassName?: string
  subHeaderClassName?: string
  headerContainerClassName?: string
}

const InputHeader: React.FunctionComponent<IInputHeaderProps> = ({
  header,
  headerRequired,
  subHeader,
  headerClassName,
  subHeaderClassName,
  headerContainerClassName
}) => {
  return (
    <div className={`flex flex-col ${headerContainerClassName}`}>
      <div
        className={`flex flex-row text-gray-600 text-lg font-bold  ${headerClassName}`}
      >
        {header && <span>{header} </span>}
        {headerRequired && <span>* </span>}
      </div>
      {subHeader && (
        <p className={`text-xs font-thin ${subHeaderClassName}`}>{subHeader}</p>
      )}
    </div>
  )
}

export default InputHeader
