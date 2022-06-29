import { IUserActions, IUserActionTypes, IUserState } from "./actions"
import { ROLE } from "../../types/common"

const initialState = {
  isLogin: false,
  role: ROLE.USER,
  username: "",
  userId: "",
  isVerified: false
}

const userReducer = (
  state: IUserState = initialState,
  { type, payload }: IUserActions
) => {
  switch (type) {
    case IUserActionTypes.USER_SIGN_IN:
      const SignInState = { ...state, isLogin: payload.isLogin }
      return SignInState

    case IUserActionTypes.USER_SIGN_OUT:
      const SignOutState = {
        isLogin: false,
        role: ROLE.USER,
        username: "",
        userId: "",
        isVerified: false
      }
      return SignOutState
    default:
      return state
  }
}

export default userReducer
