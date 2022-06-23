import React, { PropsWithChildren } from "react"

export interface IBaseNavDrawerItemProps
  extends React.HTMLProps<HTMLButtonElement> {
  title: string
  icon: React.ReactNode
}

const BaseNavDraweritem: React.FunctionComponent<
  PropsWithChildren<IBaseNavDrawerItemProps>
> = ({ children, icon, title }) => {
  return (
    <button className="w-full flex flex-row justify-around items-center">
      {icon}
      {title}
    </button>
  )
}

export default BaseNavDraweritem
