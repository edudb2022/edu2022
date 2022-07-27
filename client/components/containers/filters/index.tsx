import React, { PropsWithChildren } from "react"

interface IBaseFilterContainerPorps {}

const BaseFilterContainer: React.FunctionComponent<
  PropsWithChildren<IBaseFilterContainerPorps>
> = ({ children }) => {
  return <div className="flex flex-col gap-y-6 w-full">{children}</div>
}

export default BaseFilterContainer
