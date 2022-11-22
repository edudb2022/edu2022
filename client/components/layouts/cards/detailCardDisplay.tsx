import React, { PropsWithChildren } from "react"

interface IDetailedCardDetailLayoutProps {}

const DetailedCardDetailLayout: React.FunctionComponent<
  PropsWithChildren<IDetailedCardDetailLayoutProps>
> = ({ children }) => {
  return (
    <div className="md:grid md:col-span-9 md:col-start-4 p-2">{children}</div>
  )
}

export default DetailedCardDetailLayout
