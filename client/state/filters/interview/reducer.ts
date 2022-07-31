import produce from "immer"
import {
  IInterviewFilterAction,
  IInterviewFilterActionTypes,
  IInterviewFilterState
} from "./actions"

const initialState = {
  sorting: "",
  admissionType: "",
  scoreSorting: ""
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

    case IInterviewFilterActionTypes.SET_SCORE_SORTING:
      return produce(state, (draft) => {
        draft.scoreSorting = payload
      })

    case IInterviewFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = ""
        draft.admissionType = ""
        draft.scoreSorting = ""
      })
    default:
      return state
  }
}

export default interviewFilterReducer
