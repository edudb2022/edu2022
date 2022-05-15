import {
  ISystemErrorACtion,
  ISystemIsLoadingAction,
  ISystemActionTypes,
} from "./types";

export const setIsLoading = (payload: ISystemIsLoadingAction) => ({
  payload: payload,
  type: ISystemActionTypes.SYSTEM_IS_LOADING,
});

export const setError = (payload: ISystemErrorACtion) => ({
  payload: payload,
  type: ISystemActionTypes.SYSTEM_ERROR,
});

export default {
  setIsLoading,
  setError,
};
