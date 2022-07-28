import { combineReducers } from "redux"
import admissionFilterReducer from "./admission/reducer"
import InterviewFilterReducer from "./interview/reducer"

export const rootFilterReducer = combineReducers({
  admission: admissionFilterReducer,
  interview: InterviewFilterReducer
})

export type IRootState = ReturnType<typeof rootFilterReducer>
