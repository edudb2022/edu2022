import { type } from "os"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  STCheckExist,
  STGetPayload,
  STGetUserId
} from "../../service/supertoken/Sesstion"
import { IUserActionTypes } from "../../state/user/actions"
import { useAppSelector } from "../common/useAppSelector"
// import { IUserActionTypes } from "../../state/user/actions"

const useAuth = () => {
  const dispatch = useDispatch()
  const UserState = useAppSelector((state) => state.user)
  useEffect(() => {
    const getUser = async () => {
      try {
        const session = await STCheckExist()

        if (session) {
          const userId = await STGetUserId()
          const payload = await STGetPayload()
          console.log(543, payload)

          dispatch({
            type: IUserActionTypes.USER_SIGN_IN,
            payload: { isLogin: true }
          })
        }

        if (!session) {
          dispatch({
            type: IUserActionTypes.USER_SIGN_OUT
          })
        }
      } catch (err) {
        console.error(err)
      }
    }

    getUser()
  }, [UserState.isLogin])
}

export default useAuth
