import produce from "immer"
import { ISystemActions, ISystemActionTypes, ISystemState } from "./actions"

const initialState = {
  // isLoading: false,
  error: "",
  // isAuthModalOpen: false,
  modals: { isLoading: false, auth: false, error: "" }
}

const systemReducer = (
  state: ISystemState = initialState,
  { type, payload }: ISystemActions
): ISystemState => {
  switch (type) {
    case ISystemActionTypes.SYSTEM_IS_LOADING:
      return produce(state, (draft) => {
        draft.modals.isLoading = payload
      })

    case ISystemActionTypes.SYSTEM_ERROR:
      return produce(state, (draft) => {
        draft.modals.error = payload
      })

    case ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN:
      return produce(state, (draft) => {
        draft.modals.auth = payload
      })

    default:
      return state
  }
}

export default systemReducer
