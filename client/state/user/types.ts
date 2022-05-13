import { ID, Role, UserName } from "../../types/common";

export enum UserActionTypes {
  USER_SIGN_IN = "USER:SIGN_IN",
  USER_SIGN_OUT = "USER:SIGN_OUT",
}

export interface IUserState {
  isLogin: boolean;
  role: Role;
  username: UserName;
  userId: ID;
  isVerified: boolean;
}

export interface IUserSignInAction {
  payload: IUserState;
  type: typeof UserActionTypes.USER_SIGN_IN;
}

export interface IUserSignOutAction {
  type: typeof UserActionTypes.USER_SIGN_OUT;
}

export type UserActions = IUserSignInAction | IUserSignOutAction;
