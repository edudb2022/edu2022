import React, { PropsWithChildren } from "react"

interface ILongQuestionsDisplayLayoutProps {}

const LongQuestionsDisplayLayout: React.FunctionComponent<
  PropsWithChildren<ILongQuestionsDisplayLayoutProps>
> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-20 mt-12 md:mt-20">
      {children}
    </div>
  )
}

export default LongQuestionsDisplayLayout
