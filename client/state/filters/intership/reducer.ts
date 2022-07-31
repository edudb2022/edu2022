import produce from "immer"
import {
  IIntershipFilterAction,
  IIntershipFilterActionTypes,
  IIntershipFilterState
} from "./actions"
// import { IIntershipState } from "./actions"
// import {
//   IIntershipFilterAction,
//   IIntershipFilterActionTypes,
//   IIntershipFilterState
// } from "./actions"

const initialState = {
  sorting: "",
  internshipType: "",
  industry: ""
} as IIntershipFilterState

const intershipFilterReducer = (
  state: IIntershipFilterState = initialState,
  { payload, type }: IIntershipFilterAction
) => {
  switch (type) {
    case IIntershipFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case IIntershipFilterActionTypes.SET_INTERSHIP_TYPE:
      return produce(state, (draft) => {
        draft.internshipType = payload
      })

    case IIntershipFilterActionTypes.SET_INDUESTY:
      return produce(state, (draft) => {
        draft.industry = payload
      })

    case IIntershipFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = ""
        draft.internshipType = ""
        draft.industry = ""
      })
    default:
      return state
  }
}

export default intershipFilterReducer
