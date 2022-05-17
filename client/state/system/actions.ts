// import {
//   ISystemIsLoadingAction,
//   ISystemActionTypes,
//   ISystemErrorAction,
// } from "./types";

// export const setIsLoading = (payload: ISystemIsLoadingAction) => ({
//   payload: payload,
//   type: ISystemActionTypes.SYSTEM_IS_LOADING,
// });

// export const setError = (payload: ISystemErrorAction) => ({
//   payload: payload,
//   type: ISystemActionTypes.SYSTEM_ERROR,
// });

// export default {
//   setIsLoading,
//   setError,
// };

export enum ISystemActionTypes {
  SYSTEM_IS_LOADING = "SYSTEM:IS_LOADING",
  SYSTEM_ERROR = "SYSTEM:ERROR",
}

export interface ISystemState {
  isLoading: boolean;
  error: string;
}

export interface ISystemIsLoadingAction {
  payload: ISystemState;
  type: typeof ISystemActionTypes.SYSTEM_IS_LOADING;
}

export interface ISystemErrorAction {
  payload: ISystemState;
  type: typeof ISystemActionTypes.SYSTEM_ERROR;
}

export type ISystemActions = ISystemIsLoadingAction | ISystemErrorAction;
