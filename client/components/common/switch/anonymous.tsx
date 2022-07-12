import React from "react"
import BaseSwitch, { IBaseSwitchProps } from "."

interface IAnonymousSwitchprops extends IBaseSwitchProps {}

const AnonymousSwitch: React.FunctionComponent<IAnonymousSwitchprops> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex felx-row gap-x-6 items-center">
      <div className={`text-base text-gray-600 ${className}`}>匿名發佈</div>
      <BaseSwitch name="isAnonymous" {...props} />
    </div>
  )
}

export default AnonymousSwitch
