import React from "react"
import { ImArrowRight2 } from "react-icons/im"
import BaseButton, { IBaseButtonProps } from "."
import RightArrowIcon from "../icons/rightArrow"

interface IFormSumitButtonProps extends IBaseButtonProps {}
const FormSumitButton: React.FunctionComponent<IFormSumitButtonProps> = () => {
  return (
    <BaseButton
      type="submit"
      className="border-2 rounded-sm flex flex-row justify-center text-base items-center font-black gap-x-2 w-60 px-0 py-2 hover:animate-borderGrayDeep"
    >
      <div>完成</div>

      <RightArrowIcon className="hover:animate-bounceHorizontal" />
    </BaseButton>
  )
}

export default FormSumitButton
