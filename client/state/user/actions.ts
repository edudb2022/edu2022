import {
  IUserSignInAction,
  IUserSignOutAction,
  IUserActionTypes,
} from "./types";

export const signIn = (payload: IUserSignInAction) => ({
  payload: payload,
  type: IUserActionTypes.USER_SIGN_IN,
});

export const signOut = (): IUserSignOutAction => ({
  type: IUserActionTypes.USER_SIGN_OUT,
});

export default {
  signIn,
  signOut,
};
