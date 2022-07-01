import React, { PropsWithChildren } from "react"
import { boolean } from "yup"

export interface IInputHeaderProps {
  header?: string
  headerRequired?: boolean
}

const InputHeader: React.FunctionComponent<
  PropsWithChildren<IInputHeaderProps>
> = ({ children, header, headerRequired }) => {
  return (
    <div className="flex flex-row">
      {header && <h2>{header} </h2>}
      {headerRequired && <h2>* </h2>}
    </div>
  )
}

export default InputHeader
