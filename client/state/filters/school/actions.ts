export enum ISchoolFilterActionTypes {
  SET_SORTING = "FILTER:SCHOOL:SET_SORTING",
  RESET = "FILTER:SCHOOL:RESET"
}

export interface ISchoolFilterState {
  sorting: "" | string
}

export interface SET_SORTING {
  payload: string
  type: typeof ISchoolFilterActionTypes.SET_SORTING
}

export interface RESET {
  payload: undefined
  type: typeof ISchoolFilterActionTypes.RESET
}

export type ISchoolFilterAction = SET_SORTING | RESET
