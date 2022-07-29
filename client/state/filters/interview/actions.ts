import { ADMISSION_TYPE } from "../../../types/common"

export enum IInterviewFilterActionTypes {
  SET_SORTING = "FILTER:INTERVIEW:SET_SORTING",
  SET_ADMISSION_TYPE = "FILTER:INTERVIEW:SET_ADMISSION_TYPE",
  SET_SCORE_SORTING = "FILTER:INTERVIEW:SCORE_SORTING",
  RESET = "FILTER:INTERVIEW:RESET"
}

export interface IInterviewFilterState {
  sorting: "" | string
  admissionType: "" | ADMISSION_TYPE
  scoreSorting: string
}

export interface SET_SORTING {
  payload: string
  type: typeof IInterviewFilterActionTypes.SET_SORTING
}

export interface SET_ADMISSION_TYPE {
  payload: "" | ADMISSION_TYPE
  type: typeof IInterviewFilterActionTypes.SET_ADMISSION_TYPE
}

export interface SET_SCORE_SORTING {
  payload: string
  type: typeof IInterviewFilterActionTypes.SET_SCORE_SORTING
}

export interface RESET {
  payload: undefined
  type: typeof IInterviewFilterActionTypes.RESET
}

export type IInterviewFilterAction =
  | SET_SORTING
  | SET_ADMISSION_TYPE
  | RESET
  | SET_SCORE_SORTING
