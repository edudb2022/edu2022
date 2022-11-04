import React from "react"

import BaseButton, { IBaseButtonProps } from "."
import RightArrowIcon from "../icons/rightArrow"

export interface IFormSubmitButtonProps extends IBaseButtonProps {
  isInProgress: boolean
}

const FormSubmitButton: React.FunctionComponent<IFormSubmitButtonProps> = ({
  isInProgress
}) => {
  const className = ` border-2 rounded-sm flex flex-row justify-center text-base items-center font-black gap-x-2 w-60 px-0 py-2  ${
    isInProgress
      ? "animate-submitInprogress border-black"
      : "hover:animate-borderGrayDeep border-2"
  }`

  return (
    <BaseButton type="submit" className={className} disabled={isInProgress}>
      {isInProgress ? (
        <div>請等等...</div>
      ) : (
        <>
          <div>提交</div>
          <RightArrowIcon
            className={`${!isInProgress && "hover:animate-bounceHorizontal"}`}
          />
        </>
      )}
    </BaseButton>
  )
}

export default FormSubmitButton
