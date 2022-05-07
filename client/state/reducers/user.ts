import { Role } from "../../types";
import { AnyAction } from "redux";

const initialState = {
  isLogin: false,
  role: Role.User,
  username: "",
  userId: "",
  isVerified: false,
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
