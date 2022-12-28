import { ROLE, TUserId, UserName } from "../../types/common"

export enum IUserActionTypes {
  USER_SIGN_IN = "USER:SIGN_IN",
  USER_SIGN_OUT = "USER:SIGN_OUT"
}

export interface IUserState {
  isLogin: boolean
  role: ROLE
  username: UserName
  userId: TUserId | null
  isVerified: boolean
}

export interface IUserSignInAction {
  payload: IUserState
  type: typeof IUserActionTypes.USER_SIGN_IN
}

export interface IUserSignOutAction {
  payload?: null
  type: typeof IUserActionTypes.USER_SIGN_OUT
}

export type IUserActions = IUserSignInAction | IUserSignOutAction
