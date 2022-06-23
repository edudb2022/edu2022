import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react"

interface PageLayoutProps {}

const PageLayout: React.FunctionComponent<
  PropsWithChildren<PageLayoutProps>
> = ({ children }) => {
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
