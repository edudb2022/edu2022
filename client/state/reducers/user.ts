import { AnyAction } from "redux";
import { Role } from "../../types/common";
import { IUserState } from "../../types/state";
import { IUserActions } from "../actions/user";

const initialState = {
  isLogin: false,
  role: Role.User,
  username: "",
  userId: "",
  isVerified: false,
};

const userReducer = (
  state: IUserState = initialState,
  { type, action }: IUserActions
) => {
  switch (type) {
    default:
      return state;
  }
};

export default userReducer;
