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
  SYSTEM_IS_AUTH_MODAL_OPEN = "SYSTEM:IS_AUTH_MODAL_OPRN"
}

export interface I123State {
  loading: boolean
  auth: boolean
}
export interface ISystemState {
  // isLoading: boolean
  error: string
  // isAuthModalOpen: boolean
  modals: { isLoading: boolean; auth: boolean }
}

export interface ISystemIsLoadingAction {
  payload: boolean
  type: typeof ISystemActionTypes.SYSTEM_IS_LOADING
}

export interface ISystemErrorAction {
  payload: ISystemState
  type: typeof ISystemActionTypes.SYSTEM_ERROR
}

export interface ISystemIsAuthModalOpenAction {
  payload: boolean
  type: typeof ISystemActionTypes.SYSTEM_IS_AUTH_MODAL_OPEN
}

export type ISystemActions =
  | ISystemIsLoadingAction
  | ISystemErrorAction
  | ISystemIsAuthModalOpenAction
