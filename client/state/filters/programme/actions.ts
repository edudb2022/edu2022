import { ADMISSION_TYPE, ProgrammeSortingTypes } from "../../../types/common"

export enum IProgrammeFilterActionTypes {
  SET_SORTING = "FILTER:PROGRAMME:SET_SORTING",
  RESET = "FILTER:PROGRAMME:RESET"
}

export interface IProgrammeFilterState {
  sorting: "" | ProgrammeSortingTypes
}

export interface SET_SORTING {
  payload: ProgrammeSortingTypes
  type: typeof IProgrammeFilterActionTypes.SET_SORTING
}

export interface RESET {
  payload: undefined
  type: typeof IProgrammeFilterActionTypes.RESET
}

export type IProgrammeFilterAction = SET_SORTING | RESET
