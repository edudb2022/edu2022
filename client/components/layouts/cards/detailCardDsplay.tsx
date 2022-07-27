import React, { PropsWithChildren } from "react"

interface IDetailedCardDetailLayoutProps {}

const DetailedCardDetailLayout: React.FunctionComponent<
  PropsWithChildren<IDetailedCardDetailLayoutProps>
> = ({ children }) => {
  return (
    // <div className="flex justify-center mt-4 ">
    //   <div className={`w-full flex flex-col items-end  border-2`}>
    //     <div className={`w-4/6 flex flex-col gap-x-12 items-end border-2`}>
    <div className="grid md:col-span-9 col-start-4">{children}</div>

    //         </div>
    //       </div>
    //     </div>
  )
}

export default DetailedCardDetailLayout
