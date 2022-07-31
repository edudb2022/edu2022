import { ADMISSION_TYPE } from "../../../types/common"

export enum IProgrammeFilterActionTypes {
  SET_SORTING = "FILTER:PROGRAMME:SET_SORTING",

  RESET = "FILTER:PROGRAMME:RESET"
}

export interface IProgrammeFilterState {
  sorting: "" | string
}

export interface SET_SORTING {
  payload: string
  type: typeof IProgrammeFilterActionTypes.SET_SORTING
}

export interface RESET {
  payload: undefined
  type: typeof IProgrammeFilterActionTypes.RESET
}

export type IProgrammeFilterAction = SET_SORTING | RESET
