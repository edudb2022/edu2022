import produce from "immer"
import { gradJobOfferSortingTypes } from "../../../types/common"
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
  sorting: gradJobOfferSortingTypes.POST_DATE_DESCENDING,
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

    case IGradJobFilterActionTypes.SET_INDUESTY:
      return produce(state, (draft) => {
        draft.industry = payload
      })

    case IGradJobFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = gradJobOfferSortingTypes.POST_DATE_DESCENDING
        draft.industry = ""
      })
    default:
      return state
  }
}

export default gradJobFilterReducer
