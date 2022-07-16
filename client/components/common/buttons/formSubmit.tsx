import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { ImArrowRight2 } from "react-icons/im"
import BaseButton, { IBaseButtonProps } from "."

interface IFormSumitButtonProps extends IBaseButtonProps {}
const FormSumitButton: React.FunctionComponent<IFormSumitButtonProps> = () => {
  return (
    <BaseButton
      type="submit"
      className="border-2 rounded-md flex flex-row justify-center text-base items-center font-black gap-x-2 w-60 px-0 py-2  "
    >
      <div>Submit</div>

      {/* <ImArrowRight2 className="animate-bounceHorizontal" /> */}

      <ImArrowRight2 className="animate-bounceHorizontal" />
    </BaseButton>
  )
}

export default FormSumitButton
