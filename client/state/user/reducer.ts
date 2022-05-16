import { IUserActions, IUserActionTypes, IUserState } from "./types";
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
  { type, payload }: IUserActions
) => {
  switch (type) {
    case IUserActionTypes.USER_SIGN_IN:
      return state;

    case IUserActionTypes.USER_SIGN_OUT:
      console.log(123);
      return state;
    default:
      return state;
  }
};

export default userReducer;
