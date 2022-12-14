import { combineReducers } from "redux"
import admissionFilterReducer from "./admission/reducer"
import gradJobFilterReducer from "./gradJob/reducer"
import intershipFilterReducer from "./intership/reducer"
import interviewFilterReducer from "./interview/reducer"
import programmeFilterReducer from "./programme/reducer"
import schoolFilterReducer from "./school/reducer"

export const rootFilterReducer = combineReducers({
  admission: admissionFilterReducer,
  interview: interviewFilterReducer,
  internship: intershipFilterReducer,
  gradJob: gradJobFilterReducer,
  programme: programmeFilterReducer,
  school: schoolFilterReducer
})

export type IRootState = ReturnType<typeof rootFilterReducer>
