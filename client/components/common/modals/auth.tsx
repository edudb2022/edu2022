import React from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../hooks/common/useAppSelector"
import { STRedirectToSignUp } from "../../../service/supertoken/function"
import { ISystemActionTypes } from "../../../state/system/actions"
import ErrorIcon from "../icons/error"
import DoubleButtonModal, { IDoubleButtonModalProps } from "./doubleButton"

interface IAuthModalProps {}

const AuthModal: React.FunctionComponent<IAuthModalProps> = () => {
  const { isAuthModalOpen } = useAppSelector((state) => state.system)
  const dispatch = useDispatch()
  const handleLeftClick = () => {
    dispatch({
      type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
      payload: false
    })
  }

  const handleRightClick = () => {
    STRedirectToSignUp()
    dispatch({
      type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
      payload: false
    })
  }

  return (
    <DoubleButtonModal
      leftButtonTitle="OK 明白"
      rightButtonTile="登入"
      isOpen={isAuthModalOpen}
      onLeftClick={handleLeftClick}
      onRightCick={handleRightClick}
    >
      <div className="flex flex-col justify-center items-center h-4/5 ">
        <span className="text-6xl text-theme-one-300">
          <ErrorIcon />
        </span>
        <h6 className="mt-4">不如登入咗先?</h6>
      </div>
    </DoubleButtonModal>
  )
}

export default AuthModal
