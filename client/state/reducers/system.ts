import { ID, ISystem, Role, Username } from "../../types";
import { AnyAction } from "redux";

const initialState = {
  user: {
    isLogin: false,
    role: Role.User,
    username: "",
    userId: "",
    isVerified: false,
  },
};

// export interface ISystem {
//   user: {
//     isLogin: boolean;
//     role: Role.User;
//     username: Username;
//     userId: ID;
//     isVerified: boolean;
//   };
// }

const systemReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default systemReducer;
