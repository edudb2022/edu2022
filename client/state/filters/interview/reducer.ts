import produce from "immer"
import { InterviewSortingTypes } from "../../../types/common"
import {
  IInterviewFilterAction,
  IInterviewFilterActionTypes,
  IInterviewFilterState
} from "./actions"

const initialState = {
  sorting: InterviewSortingTypes.POST_DATE_DESCENDING,
  admissionType: ""
} as IInterviewFilterState

const interviewFilterReducer = (
  state: IInterviewFilterState = initialState,
  { payload, type }: IInterviewFilterAction
) => {
  switch (type) {
    case IInterviewFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case IInterviewFilterActionTypes.SET_ADMISSION_TYPE:
      return produce(state, (draft) => {
        draft.admissionType = payload
      })

    case IInterviewFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = InterviewSortingTypes.POST_DATE_DESCENDING
        draft.admissionType = ""
      })
    default:
      return state
  }
}

export default interviewFilterReducer
