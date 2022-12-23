import React from "react"
import ErrorIcon from "../components/common/icons/error"
import PageLayout from "../components/layouts/page"
import NotFound404Icon from "../components/common/icons/notFound"

const ErrorPage: React.FunctionComponent = () => {
  return (
    <PageLayout>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col justify-center bg-theme-one-50  text-theme-one-500 w-full p-4 rounded-2xl">
          <div className="text-[10rem] flex flex-row">
            <ErrorIcon />
            <NotFound404Icon />
          </div>
        </div>
        <p className="text-end font-mono text-xs text-theme-one-500">
          By R1R69
        </p>
      </div>
    </PageLayout>
  )
}

export default ErrorPage
