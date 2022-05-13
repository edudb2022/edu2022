import {
  IUserSignInAction,
  IUserSignOutAction,
  UserActionTypes,
} from "./types";

export const signIn = (payload: IUserSignInAction) => ({
  payload: payload,
  type: UserActionTypes.USER_SIGN_IN,
});

export const signOut = (): IUserSignOutAction => ({
  type: UserActionTypes.USER_SIGN_OUT,
});

export default {
  signIn,
  signOut,
};
