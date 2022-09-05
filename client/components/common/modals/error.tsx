import React from "react"
import ErrorIcon from "../icons/error"
import SingleButtonModal from "./singleButton"
import { useAppSelector } from "../../../hooks/common/useAppSelector"
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface ISuccessModalProps {}

const ErrorModal: React.FunctionComponent<ISuccessModalProps> = () => {
  const state = useAppSelector((state) => state.system.modals.error)

  // const dispatch = useAppDispatch()
  // const handleLeftClick = () => {
  //   dispatch({
  //     type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
  //     payload: false
  //   })
  // }

  // const handleRightClick = () => {
  //   STRedirectToSignIn()
  //   dispatch({
  //     type: ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN,
  //     payload: false
  //   })
  // }

  console.log("222", state)
  return (
    <SingleButtonModal
      buttonTitle="OK"
      isOpen={!!state}
      buttonClassName="bg-theme-rose-100 text-theme-rose-700 font-semibold"
      className=" h-48 w-80 md:h-56 md:w-96 "
    >
      <div className="flex flex-col justify-center items-center h-40">
        <span className="text-8xl text-theme-rose-600">
          <ErrorIcon />
        </span>
        <h6>{state}</h6>
      </div>
    </SingleButtonModal>
  )
}

export default ErrorModal
