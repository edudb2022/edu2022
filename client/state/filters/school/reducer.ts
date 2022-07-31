import produce from "immer"
import {
  ISchoolFilterAction,
  ISchoolFilterActionTypes,
  ISchoolFilterState
} from "./actions"
// import {
//   ISchoolFilterAction,
//   ISchoolFilterActionTypes,
//   ISchoolFilterState
// } from "./actions"

const initialState = {
  sorting: ""
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
        draft.sorting = ""
      })
    default:
      return state
  }
}

export default schoolFilterReducer
