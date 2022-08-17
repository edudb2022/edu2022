import { ADMISSION_TYPE, InternshipTypesId } from "../../../types/common"

export enum IIntershipFilterActionTypes {
  SET_SORTING = "FILTER:INTERSHIP:SET_SORTING",
  SET_INTERSHIP_TYPE = "FILTER:INTERSHIP:SET_INTERSHIP_TYPE",
  SET_INDUESTY = "FILTER:INTERSHIP:SET_INDUESTY",
  RESET = "FILTER:INTERSHIP:RESET"
}

export interface IIntershipFilterState {
  sorting: "" | string
  internshipType: "" | InternshipTypesId
  industry: string
}

export interface SET_SORTING {
  payload: string
  type: typeof IIntershipFilterActionTypes.SET_SORTING
}

export interface SET_INTERSHIP_TYPE {
  payload: "" | InternshipTypesId
  type: typeof IIntershipFilterActionTypes.SET_INTERSHIP_TYPE
}

export interface SET_INDUESTY {
  payload: string
  type: typeof IIntershipFilterActionTypes.SET_INDUESTY
}

export interface RESET {
  payload: undefined
  type: typeof IIntershipFilterActionTypes.RESET
}

export type IIntershipFilterAction =
  | SET_SORTING
  | SET_INTERSHIP_TYPE
  | SET_INDUESTY
  | RESET
