import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react"
// import { useSessionContext } from "supertokens-auth-react/recipe/session"
interface PageLayoutProps {}

const PageLayout: React.FunctionComponent<
  PropsWithChildren<PageLayoutProps>
> = ({ children }) => {
  // let data = useSessionContext()

  const router = useRouter()
  // {
  //   router.pathname === "/" ? "bg-theme-two-500" : "bg-white"
  // }`}
  return (
    <div
      className={`flex justify-center w-full min-h-screen max-h-fit bg-white`}
    >
      <div className="w-full h-full md:w-9/10">{children}</div>
    </div>
  )
}

export default PageLayout
