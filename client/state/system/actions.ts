import {
  ISystemErrorACtion,
  ISystemIsLoadingAction,
  SystemActionTypes,
} from "./types";

export const setIsLoading = (payload: ISystemIsLoadingAction) => ({
  payload: payload,
  type: SystemActionTypes.SYSTEM_IS_LOADING,
});

export const setError = (payload: ISystemErrorACtion) => ({
  payload: payload,
  type: SystemActionTypes.SYSTEM_ERROR,
});

export default {
  setIsLoading,
  setError,
};
