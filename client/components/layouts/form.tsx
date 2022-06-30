import React, { PropsWithChildren } from "react"

interface FormPageLayoutProps {}

const FormPageLayout: React.FunctionComponent<
  PropsWithChildren<FormPageLayoutProps>
> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center border-2  ">
      <div className="flex min-w-[20rem] w-[80rem] border-2 border-green-500 ">
        {children}
      </div>
    </div>
  )
}

export default FormPageLayout
