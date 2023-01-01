import React from "react"
import Footer from "../footer"
import Navbar from "../navigator"
import { PropsWithChildren } from "react"
import LoadingBackDrop from "../common/backdrops/loading"
import useAuth from "../../hooks/auth/useAuth"
import AuthModal from "../common/modals/auth"

import ErrorModal from "../common/modals/error"

export interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<
  PropsWithChildren<ICommonLayoutProps>
> = ({ children }) => {
  useAuth()

  return (
    <>
      <LoadingBackDrop />
      <AuthModal />
      <ErrorModal />
      <div className="flex flex-col justify-between h-screen border-2">
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default CommonLayout
