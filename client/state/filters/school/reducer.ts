import produce from "immer"
import { SchoolSortingTypes } from "../../../types/common"
import {
  ISchoolFilterAction,
  ISchoolFilterActionTypes,
  ISchoolFilterState
} from "./actions"

const initialState = {
  sorting: SchoolSortingTypes.POST_DATE_DESCENDING
} as ISchoolFilterState

const schoolFilterReducer = (
  state: ISchoolFilterState = initialState,
  { payload, type }: ISchoolFilterAction
) => {
  switch (type) {
    case ISchoolFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case ISchoolFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = SchoolSortingTypes.POST_DATE_DESCENDING
      })
    default:
      return state
  }
}

export default schoolFilterReducer
