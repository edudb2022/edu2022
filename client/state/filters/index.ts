import { combineReducers } from "redux"
import admissionFilterReducer from "./admission/reducer"
import gradJobFilterReducer from "./gradJob/reducer"
import intershipFilterReducer from "./intership/reducer"
import interviewFilterReducer from "./interview/reducer"

export const rootFilterReducer = combineReducers({
  admission: admissionFilterReducer,
  interview: interviewFilterReducer,
  internship: intershipFilterReducer,
  gradJob: gradJobFilterReducer
})

export type IRootState = ReturnType<typeof rootFilterReducer>
