import React from "react"
import Footer from "../footer"
import Navbar from "../navigator"
import { PropsWithChildren } from "react"
import LoadingBackDrop from "../common/backdrops/loading"
import useAuth from "../../hooks/auth/useAuth"
import AuthModal from "../common/modals/auth"
import { useAppSelector } from "../../hooks/common/useAppSelector"

import ErrorModal from "../common/modals/error"
import { setDatasets } from "react-chartjs-2/dist/utils"

export interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<
  PropsWithChildren<ICommonLayoutProps>
> = ({ children }) => {
  // const { isAuthModalOpen } = useAppSelector((state) => state.system)
  useAuth()
  // const state = useAppSelector((state) => state.system.error)

  return (
    <>
      <LoadingBackDrop />
      <AuthModal />
      <ErrorModal />
      <header>
        <Navbar />
      </header>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default CommonLayout
