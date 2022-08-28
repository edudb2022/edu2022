import produce from "immer"
import { ProgrammeSortingTypes } from "../../../types/common"
import {
  IProgrammeFilterAction,
  IProgrammeFilterActionTypes,
  IProgrammeFilterState
} from "./actions"

const initialState = {
  sorting: ProgrammeSortingTypes.POST_DATE_DESCENDING
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
        draft.sorting = ProgrammeSortingTypes.POST_DATE_DESCENDING
      })
    default:
      return state
  }
}

export default programmeFilterReducer
