import produce from "immer"
import {
  IAdmissionFilterAction,
  IAdmissionFilterActionTypes,
  IAdmissionFilterState
} from "./reducer"

const initialState = {
  sorting: "",
  offerType: "",
  admissionType: "",
  admissionLevel: "",
  yearOfStudy: ""
} as IAdmissionFilterState

const admissionFilterReducer = (
  state: IAdmissionFilterState = initialState,
  { payload, type }: IAdmissionFilterAction
) => {
  switch (type) {
    case IAdmissionFilterActionTypes.SET_SORTING:
      return produce(state, (draft) => {
        draft.sorting = payload
      })

    case IAdmissionFilterActionTypes.SET_OFFER_TYPE:
      return produce(state, (draft) => {
        draft.offerType = payload
      })

    case IAdmissionFilterActionTypes.SET_ADMISSION_TYPE:
      return produce(state, (draft) => {
        draft.admissionType = payload
      })

    case IAdmissionFilterActionTypes.SET_ADMISSION_LEVEL:
      return produce(state, (draft) => {
        draft.admissionLevel = payload
      })

    case IAdmissionFilterActionTypes.SET_YEAT_OF_STUDY:
      return produce(state, (draft) => {
        draft.yearOfStudy = payload
      })
    default:
      return state
  }
}

export default admissionFilterReducer
