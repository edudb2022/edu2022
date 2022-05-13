export enum SystemActionTypes {
  SYSTEM_IS_LOADING = "SYSTEM:IS_LOADING",
  SYSTEM_ERROR = "SYSTEM:ERROR",
}

export interface ISystemState {
  isLoading: boolean;
  error: string;
}

export interface ISystemIsLoadingAction {
  payload: ISystemState;
  type: typeof SystemActionTypes.SYSTEM_IS_LOADING;
}

export interface ISystemErrorACtion {
  payload: ISystemState;
  type: typeof SystemActionTypes.SYSTEM_ERROR;
}

export type SystemActions = ISystemIsLoadingAction | ISystemErrorACtion;
