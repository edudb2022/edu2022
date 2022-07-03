import React, { PropsWithChildren } from "react"
import { boolean } from "yup"

export interface IInputHeaderProps {
  header?: string
  headerRequired?: boolean
  subHeader?: string
}

const InputHeader: React.FunctionComponent<IInputHeaderProps> = ({
  header,
  headerRequired,
  subHeader
}) => {
  return (
    <div className="flex flex-row ml-6 mb-2">
      {header && <h6 className=" text-gray-600 ">{header} </h6>}
      {headerRequired && <h6 className=" text-gray-600 ">* </h6>}
      {subHeader && <h2> {subHeader}</h2>}
    </div>
  )
}

export default InputHeader
