import dynamic from "next/dynamic"
import React, { PropsWithChildren, useEffect } from "react"
import {
  EmailPasswordAuth,
  redirectToAuth
} from "supertokens-auth-react/recipe/emailpassword"
import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
import SuperTokens from "supertokens-auth-react"
interface FormPageLayoutProps {}

const FormPageLayout: React.FunctionComponent<
  PropsWithChildren<FormPageLayoutProps>
> = ({ children }) => {
  const EmailPasswordAuthNoSSR = dynamic(
    new Promise<typeof EmailPassword.EmailPasswordAuth>((res) =>
      res(EmailPassword.EmailPasswordAuth)
    ),
    { ssr: false }
  )
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      // redirectToAuth()
    }
  }, [])
  return (
    <div className="flex justify-center items-center border-2  ">
      <div className="flex  flex-col  p-2 w-full md:w-11/12 border-2 border-green-500 ">
        <EmailPasswordAuth>{children}</EmailPasswordAuth>
      </div>
    </div>
  )
}

export default FormPageLayout
