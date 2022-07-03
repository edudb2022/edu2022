import React, { PropsWithChildren } from "react"
import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword"

interface FormPageLayoutProps {}

const FormPageLayout: React.FunctionComponent<
  PropsWithChildren<FormPageLayoutProps>
> = ({ children }) => {
  return (
    <div className="flex justify-center items-center border-2  ">
      <div className="flex  flex-col  p-2 w-full md:w-11/12 border-2 border-green-500 ">
        {/* <EmailPasswordAuth> */}

        {children}
        {/* </EmailPasswordAuth> */}
      </div>
    </div>
  )
}

export default FormPageLayout
