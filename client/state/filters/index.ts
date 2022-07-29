import { combineReducers } from "redux"
import admissionFilterReducer from "./admission/reducer"
import IntershipFilterReducer from "./intership/reducer"
import InterviewFilterReducer from "./interview/reducer"

export const rootFilterReducer = combineReducers({
  admission: admissionFilterReducer,
  interview: InterviewFilterReducer,
  internship: IntershipFilterReducer
})

export type IRootState = ReturnType<typeof rootFilterReducer>
