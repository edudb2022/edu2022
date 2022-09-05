import React from "react"
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"

import { useAppSelector } from "../../../hooks/common/useAppSelector"
import { STRedirectToSignIn } from "../../../service/supertoken/function"
import { ISystemActionTypes } from "../../../state/system/actions"
import ErrorIcon from "../icons/error"
import DoubleButtonModal, { IDoubleButtonModalProps } from "./doubleButton"

interface IAuthModalProps {}

const AuthModal: React.FunctionComponent<IAuthModalProps> = () => {
  const { modals } = useAppSelector((state) => state.system)
  const dispatch = useAppDispatch()
  const handleLeftClick = () => {
    dispatch({
      type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
      payload: false
    })
  }

  const handleRightClick = () => {
    STRedirectToSignIn()
    dispatch({
      type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
      payload: false
    })
  }

  return (
    <DoubleButtonModal
      leftButtonTitle="OK 明白"
      rightButtonTile="登入"
      isOpen={modals.auth}
      onLeftClick={handleLeftClick}
      onRightCick={handleRightClick}
      className=" h-48 w-80 md:h-56 md:w-96  "
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
