import { combineReducers } from "redux";
import systemReducer from "./system";
import userReducer from "./user";

export const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
});
