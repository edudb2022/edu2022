import React, { PropsWithChildren } from "react"

export interface IBaseNavDrawerItemProps
  extends React.HTMLProps<HTMLButtonElement> {
  title: string
  icon: React.ReactNode
  url?: string
  handleClick?: () => void
}

const BaseNavDraweritem: React.FunctionComponent<
  PropsWithChildren<IBaseNavDrawerItemProps>
> = ({ icon, title, url, handleClick }) => {
  return (
    <div className="text-xl w-full mt-2 ">
      {url && (
        <a href={url} className="w-full flex flex-row items-center ">
          <div className="mr-8 p-2 rounded-full bg-theme-one-100">{icon}</div>
          {title}
        </a>
      )}

      {!url && (
        <button
          className="w-full flex flex-row items-center"
          onClick={handleClick}
        >
          <div className="mr-8 p-2 rounded-full bg-theme-one-100">{icon}</div>
          {title}
        </button>
      )}
    </div>
  )
}

export default BaseNavDraweritem
