import React, { PropsWithChildren } from "react"

interface ILongQuestionsDisplayLayoutProps {}

const LongQuestionsDisplayLayout: React.FunctionComponent<
  PropsWithChildren<ILongQuestionsDisplayLayoutProps>
> = ({ children }) => {
  return <div className="flex flex-col gap-y-20 mt-20">{children}</div>
}

export default LongQuestionsDisplayLayout
