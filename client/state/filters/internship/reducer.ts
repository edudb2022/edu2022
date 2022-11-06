import produce from "immer"
import { InternshipOfferSortingTypes } from "../../../types/common"
import {
  IInternshipFilterAction,
  IInternshipFilterActionTypes,
  IInternshipFilterState
} from "./actions"

const initialState = {
  sorting: InternshipOfferSortingTypes.POST_DATE_DESCENDING,
  internshipType: "",
  industry: ""
} as IInternshipFilterState

const internshipFilterReducer = (
  state: IInternshipFilterState = initialState,
  { payload, type }: IInternshipFilterAction
) => {
  switch (type) {
    case IInternshipFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case IInternshipFilterActionTypes.SET_INTERSHIP_TYPE:
      return produce(state, (draft) => {
        draft.internshipType = payload
      })

    case IInternshipFilterActionTypes.SET_INDUESTY:
      return produce(state, (draft) => {
        draft.industry = payload
      })

    case IInternshipFilterActionTypes.RESET:
      return produce(state, (draft) => {
        draft.sorting = InternshipOfferSortingTypes.POST_DATE_DESCENDING
        draft.internshipType = ""
        draft.industry = ""
      })
    default:
      return state
  }
}

export default internshipFilterReducer
