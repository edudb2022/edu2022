import { combineReducers } from "redux"
import { rootFilterReducer } from "../filters"
import systemReducer from "../system/reducer"
import userReducer from "../user/reducer"

export const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
  filter: rootFilterReducer
})

export type IRootState = ReturnType<typeof rootReducer>
