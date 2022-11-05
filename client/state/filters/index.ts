import { combineReducers } from "redux"
import admissionFilterReducer from "./admission/reducer"
import gradJobFilterReducer from "./gradJob/reducer"
import internshipFilterReducer from "./internship/reducer"
import interviewFilterReducer from "./interview/reducer"
import programmeFilterReducer from "./programme/reducer"
import schoolFilterReducer from "./school/reducer"

export const rootFilterReducer = combineReducers({
  admission: admissionFilterReducer,
  interview: interviewFilterReducer,
  internship: internshipFilterReducer,
  gradJob: gradJobFilterReducer,
  programme: programmeFilterReducer,
  school: schoolFilterReducer
})

export type IRootState = ReturnType<typeof rootFilterReducer>
