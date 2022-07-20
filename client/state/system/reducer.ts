import produce from "immer"
import { ISystemActions, ISystemActionTypes, ISystemState } from "./actions"

const initialState = {
  isLoading: false,
  error: "",
  isAuthModalOpen: false
}

const systemReducer = (
  state: ISystemState = initialState,
  { type, payload }: ISystemActions
) => {
  switch (type) {
    case ISystemActionTypes.SYSTEM_IS_LOADING:
      return { ...state, isLoading: payload }

    case ISystemActionTypes.SYSTEM_ERROR:
      return state

    case ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN:
      return produce(state, (draft) => {
        draft.isAuthModalOpen = payload
      })

    default:
      return state
  }
}

export default systemReducer
