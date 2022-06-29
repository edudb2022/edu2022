import { type } from "os"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  STCheckExist,
  STGetUserId
} from "../../service/supertoken/config/Sesstion"
import { IUserActionTypes } from "../../state/user/actions"
// import { IUserActionTypes } from "../../state/user/actions"

const useAuth = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      try {
        const session = await STCheckExist()

        console.log("hook", session)
        if (session) {
          const userId = await STGetUserId()
          console.log("hook2", userId)
          dispatch({
            type: IUserActionTypes.USER_SIGN_IN,
            payload: { isLogin: true }
          })
        }
      } catch (err) {
        console.error(123, err)
      }
    }

    getUser()
  }, [])
}

export default useAuth
