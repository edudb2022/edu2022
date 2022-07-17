import { ISystemActions, ISystemActionTypes, ISystemState } from "./actions"

const initialState = {
  isLoading: false,
  error: ""
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

    default:
      return state
  }
}

export default systemReducer
