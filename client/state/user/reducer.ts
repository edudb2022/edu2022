import { IUserState, UserActions, UserActionTypes } from "./types";
import { Role } from "../../types/common";

const initialState = {
  isLogin: false,
  role: Role.User,
  username: "",
  userId: "",
  isVerified: false,
};

const userReducer = (
  state: IUserState = initialState,
  { type, payload }: UserActions
) => {
  switch (type) {
    case UserActionTypes.USER_SIGN_IN:
      return state;
    default:
      return state;
  }
};

export default userReducer;
