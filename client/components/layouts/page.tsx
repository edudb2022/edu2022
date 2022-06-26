import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react"
// import { useSessionContext } from "supertokens-auth-react/recipe/session"
interface PageLayoutProps {}

const PageLayout: React.FunctionComponent<
  PropsWithChildren<PageLayoutProps>
> = ({ children }) => {
  // let data = useSessionContext()
  // console.log(123, data)
  const router = useRouter()
  // {
  //   router.pathname === "/" ? "bg-theme-two-500" : "bg-white"
  // }`}
  return (
    <div className={`flex justify-center w-full p-2  bg-white`}>
      <div className="w-full md:w-9/10">{children}</div>
    </div>
  )
}

export default PageLayout
