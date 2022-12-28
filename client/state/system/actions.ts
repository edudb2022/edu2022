export enum ISystemActionTypes {
  SYSTEM_IS_LOADING = "SYSTEM:IS_LOADING",
  SYSTEM_ERROR = "SYSTEM:ERROR",
  SYSTEM_IS_AUTH_MODAL_OPEN = "SYSTEM:IS_AUTH_MODAL_OPRN"
}

export interface ISystemState {
  error: string
  modals: { isLoading: boolean; auth: boolean; error: string }
}

export interface ISystemIsLoadingAction {
  payload: boolean
  type: typeof ISystemActionTypes.SYSTEM_IS_LOADING
}

export interface ISystemErrorAction {
  payload: string
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
