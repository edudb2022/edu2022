import { Role } from "../../types";
import { AnyAction } from "redux";

const initialState = {
  isLoading: false,
};

const systemReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default systemReducer;
