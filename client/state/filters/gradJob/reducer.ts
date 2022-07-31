import produce from "immer"
import {
  IGradJobFilterAction,
  IGradJobFilterActionTypes,
  IGradJobFilterState
} from "./actions"
// import {
//   IIntershipFilterAction,
//   IGradJobFilterActionTypes,
//   IIntershipFilterState
// } from "./actions"
// import { IIntershipState } from "./actions"
// import {
//   IIntershipFilterAction,
//   IGradJobFilterActionTypes,
//   IIntershipFilterState
// } from "./actions"

const initialState = {
  sorting: "",
  gradJobType: "",
  industry: ""
} as IGradJobFilterState

const gradJobFilterReducer = (
  state: IGradJobFilterState = initialState,
  { payload, type }: IGradJobFilterAction
) => {
  switch (type) {
    case IGradJobFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case IGradJobFilterActionTypes.SET_GRADJOB_TYPE:
      return produce(state, (draft) => {
        draft.gradJobType = payload
      })

    case IGradJobFilterActionTypes.SET_INDUESTY:
      return produce(state, (draft) => {
        draft.industry = payload
      })

    case IGradJobFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = ""
        draft.gradJobType = ""
        draft.industry = ""
      })
    default:
      return state
  }
}

export default gradJobFilterReducer
