import { ADMISSION_TYPE } from "../../../types/common"

export enum IGradJobFilterActionTypes {
  SET_SORTING = "FILTER:GRAD_JOB:SET_SORTING",
  SET_INDUESTY = "FILTER:GRAD_JOB:SET_INDUESTY_SORTING",
  RESET = "FILTER:GRAD_JOB:RESET"
}

export interface IGradJobFilterState {
  sorting: "" | string
  industry: string
}

export interface SET_SORTING {
  payload: string
  type: typeof IGradJobFilterActionTypes.SET_SORTING
}

export interface SET_INDUESTY {
  payload: string
  type: typeof IGradJobFilterActionTypes.SET_INDUESTY
}

export interface RESET {
  payload: undefined
  type: typeof IGradJobFilterActionTypes.RESET
}

export type IGradJobFilterAction = SET_SORTING | SET_INDUESTY | RESET
