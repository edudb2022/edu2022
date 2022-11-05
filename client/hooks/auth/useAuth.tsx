import { type } from "os"
import React, { useEffect } from "react"

import {
  STCheckExist,
  STGetPayload,
  STGetUserId
} from "../../service/supertoken/Session"
import { IUserActionTypes } from "../../state/user/actions"
import { useAppDispatch } from "../common/useAppDispatch"
import { useAppSelector } from "../common/useAppSelector"
// import { IUserActionTypes } from "../../state/user/actions"

const useAuth = () => {
  const dispatch = useAppDispatch()
  const UserState = useAppSelector((state) => state.user)
  useEffect(() => {
    const getUser = async () => {
      try {
        const session = await STCheckExist()

        if (session) {
          const userId = await STGetUserId()
          const payload = await STGetPayload()

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
        throw err
      }
    }

    getUser()
  }, [UserState.isLogin])
}

export default useAuth
