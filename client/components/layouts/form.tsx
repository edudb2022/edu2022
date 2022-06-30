import React, { PropsWithChildren } from "react"

interface FormPageLayoutProps {}

const FormPageLayout: React.FunctionComponent<
  PropsWithChildren<FormPageLayoutProps>
> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center border-2  ">
      <div className="flex p-2 w-full md:w-11/12 border-2 border-green-500 ">
        {children}
      </div>
    </div>
  )
}

export default FormPageLayout
