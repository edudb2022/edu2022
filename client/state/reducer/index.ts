import { combineReducers } from "redux";
import systemReducer from "../system/reducer";
import userReducer from "../user/reducer";

export const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
