import React from "react"
import Footer from "../footer"
import Navbar from "../navigator"
import { PropsWithChildren } from "react"
import LoadingBackDrop from "../common/backdrops/loading"
import useAuth from "../../hooks/auth/useAuth"
import AuthModal from "../common/modals/auth"
import { useAppSelector } from "../../hooks/common/useAppSelector"

export interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<
  PropsWithChildren<ICommonLayoutProps>
> = ({ children }) => {
  // const { isAuthModalOpen } = useAppSelector((state) => state.system)
  useAuth()

  return (
    <>
      <LoadingBackDrop />
      <AuthModal />
      <header>
        <Navbar />
      </header>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default CommonLayout
