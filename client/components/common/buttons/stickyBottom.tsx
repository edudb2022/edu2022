import React from "react"
import BaseButton, { IBaseButtonProps } from "."

interface IStickyBottomButtonProps extends IBaseButtonProps {
  title: string
  className?: string
}

const StickyBottomButton: React.FunctionComponent<IStickyBottomButtonProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={`bg-theme-one-500 text-white fixed bottom-0 w-full rounded-none flex justify-center md:hidden ${className}`}
      {...props}
    >
      <h2>{title}</h2>
    </BaseButton>
  )
}

export default StickyBottomButton
