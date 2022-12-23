import React from "react"
import ErrorIcon from "../icons/error"
import SingleButtonModal from "./singleButton"
interface ISuccessModalProps {}

const SuccessModal: React.FunctionComponent<ISuccessModalProps> = () => {
  return (
    <SingleButtonModal
      buttonTitle="123"
      isOpen={true}
      buttonClassName="bg-gray-300 text-white"
    >
      <div className="flex flex-col justify-center items-center h-4/5 ">
        <span className="text-6xl text-theme-one-300">
          <ErrorIcon />
        </span>
        <h6 className="mt-4">success?</h6>
      </div>
    </SingleButtonModal>
  )
}

export default SuccessModal
