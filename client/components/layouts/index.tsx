import React from "react"
import Footer from "../footer"
import Navbar from "../navigator"
import { PropsWithChildren } from "react"
import LoadingBackDrop from "../common/backdrops/loading"
import useAuth from "../../hooks/auth/useAuth"

export interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<
  PropsWithChildren<ICommonLayoutProps>
> = ({ children }) => {
  useAuth()

  return (
    <>
      <header>
        <Navbar />
      </header>
      <LoadingBackDrop />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default CommonLayout
