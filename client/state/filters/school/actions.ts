import { SchoolSortingTypes } from "../../../types/common"

export enum ISchoolFilterActionTypes {
  SET_SORTING = "FILTER:SCHOOL:SET_SORTING",
  RESET = "FILTER:SCHOOL:RESET"
}

export interface ISchoolFilterState {
  sorting: SchoolSortingTypes
}

export interface SET_SORTING {
  payload: SchoolSortingTypes
  type: typeof ISchoolFilterActionTypes.SET_SORTING
}

export interface RESET {
  payload: undefined
  type: typeof ISchoolFilterActionTypes.RESET
}

export type ISchoolFilterAction = SET_SORTING | RESET
