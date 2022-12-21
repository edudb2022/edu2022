import React, { PropsWithChildren } from "react"

interface ICardDisplayLayoutProps {
  className?: string
}

const CardDisplayLayout: React.FunctionComponent<
  PropsWithChildren<ICardDisplayLayoutProps>
> = ({ children, className }) => {
  return (
    <div className="flex justify-center mt-4 ">
      <div
        className={`w-11/12 md:w-full flex-wrap flex flex-row gap-y-6 gap-x-12 justify-center  ${className}md:justify-start`}
      >
        {children}
      </div>
    </div>
  )
}

export default CardDisplayLayout
