import React, { PropsWithChildren } from "react"

interface FormPageLayoutProps {}

const FormPageLayout: React.FunctionComponent<
  PropsWithChildren<FormPageLayoutProps>
> = ({ children }) => {
  return <div className="border-2  max-w-">children</div>
}

export default FormPageLayout
