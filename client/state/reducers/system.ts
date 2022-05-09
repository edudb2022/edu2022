import { ISystemState } from "../../types/state";
import { ISystemActions } from "../actions/system";

const initialState = {
  isLoading: false,
  error: "",
};

const systemReducer = (
  state: ISystemState = initialState,
  { type, action }: ISystemActions
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default systemReducer;
