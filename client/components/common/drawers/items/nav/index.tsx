import React, { PropsWithChildren } from "react"

export interface IBaseNavDrawerItemProps
  extends React.HTMLProps<HTMLButtonElement> {
  title: string
  icon: React.ReactNode
  link?: string
  handleClick?: () => void
}

const BaseNavDraweritem: React.FunctionComponent<
  PropsWithChildren<IBaseNavDrawerItemProps>
> = ({ children, icon, title, link, handleClick }) => {
  return (
    <div className="text-xl">
      {link ? (
        <a href={link ?? `${link}`}>
          <button
            className="w-full flex flex-row items-center"
            onClick={handleClick}
          >
            <div className="pr-4">{icon}</div>
            {title}
          </button>
        </a>
      ) : (
        <button
          className="w-full flex flex-row items-center"
          onClick={handleClick}
        >
          <div className="pr-4">{icon}</div>
          {title}
        </button>
      )}
    </div>
  )
}

export default BaseNavDraweritem
