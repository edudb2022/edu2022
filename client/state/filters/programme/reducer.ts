import produce from "immer"
import {
  IProgrammeFilterAction,
  IProgrammeFilterActionTypes,
  IProgrammeFilterState
} from "./actions"

const initialState = {
  sorting: ""
} as IProgrammeFilterState

const programmeFilterReducer = (
  state: IProgrammeFilterState = initialState,
  { payload, type }: IProgrammeFilterAction
) => {
  switch (type) {
    case IProgrammeFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case IProgrammeFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = ""
      })
    default:
      return state
  }
}

export default programmeFilterReducer
