import { ISystemState, SystemActions, SystemActionTypes } from "./types";

const initialState = {
  isLoading: false,
  error: "",
};

const systemReducer = (
  state: ISystemState = initialState,
  { type, payload }: SystemActions
) => {
  switch (type) {
    case SystemActionTypes.SYSTEM_IS_LOADING:
      return state;

    case SystemActionTypes.SYSTEM_ERROR:
      return state;

    default:
      return state;
  }
};

export default systemReducer;
