import { IUserActions, IUserActionTypes, IUserState } from "./actions";
import { ROLE } from "../../types/common";

const initialState = {
  isLogin: false,
  role: ROLE,
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
      return state;
    default:
      return state;
  }
};

export default userReducer;
