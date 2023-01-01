import React, { FormEvent, PropsWithChildren, useEffect } from "react"

import FormSubmitButton from "../common/buttons/formSubmit"
import { SessionAuth } from "supertokens-auth-react/recipe/session"

interface IFormPageLayoutProps {
  title: string
  subTitle: string
  onSubmit: (e?: FormEvent<HTMLFormElement>) => void
  isInProgress: boolean
}

const FormPageLayout: React.FunctionComponent<
  PropsWithChildren<IFormPageLayoutProps>
> = ({ title, subTitle, children, onSubmit, isInProgress }) => {
  return (
    // <SessionAuth>
    <form className="flex justify-center items-center " onSubmit={onSubmit}>
      <div className="flex flex-col p-2 w-full md:w-11/12  gap-y-8 md:gap-y-12 ">
        <div>
          <h1 className="font-black mt-2">{title}</h1>
          <h6 className="font-light mt-2">{subTitle}</h6>
        </div>
        {children}

        <div className="flex flex-col items-center gap-y-2 justify-center">
          <p className="text-black text-thin">提交之前請檢查內容</p>
          <FormSubmitButton isInProgress={isInProgress} />
        </div>
      </div>
    </form>
    // </SessionAuth>
  )
}

export default FormPageLayout
