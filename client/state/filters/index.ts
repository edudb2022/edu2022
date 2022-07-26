import { combineReducers } from "redux"
import admissionFilterReducer from "./admission/actions"

export const rootFilterReducer = combineReducers({
  admission: admissionFilterReducer
})

export type IRootState = ReturnType<typeof rootFilterReducer>
