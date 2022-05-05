import { combineReducers } from "redux";
import systemReducer from "./system";

export const rootReducer = combineReducers({ system: systemReducer });
