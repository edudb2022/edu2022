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
  switch (type) {
    default:
      return state;
  }
};

export default systemReducer;
