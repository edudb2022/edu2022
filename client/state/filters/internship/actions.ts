import {
  InternshipOfferSortingTypes,
  InternshipTypeId
} from "../../../types/common"

export enum IInternshipFilterActionTypes {
  SET_SORTING = "FILTER:INTERNSHIP:SET_SORTING",
  SET_INTERSHIP_TYPE = "FILTER:INTERNSHIP:SET_INTERNSHIP_TYPE",
  SET_INDUESTY = "FILTER:INTERNSHIP:SET_INDUESTY",
  RESET = "FILTER:INTERNSHIP:RESET"
}

export interface IInternshipFilterState {
  sorting: InternshipOfferSortingTypes
  internshipType: "" | InternshipTypeId
  industry: string
}

export interface SET_SORTING {
  payload: InternshipOfferSortingTypes
  type: typeof IInternshipFilterActionTypes.SET_SORTING
}

export interface SET_INTERSHIP_TYPE {
  payload: "" | InternshipTypeId
  type: typeof IInternshipFilterActionTypes.SET_INTERSHIP_TYPE
}

export interface SET_INDUESTY {
  payload: string
  type: typeof IInternshipFilterActionTypes.SET_INDUESTY
}

export interface RESET {
  payload: undefined
  type: typeof IInternshipFilterActionTypes.RESET
}

export type IInternshipFilterAction =
  | SET_SORTING
  | SET_INTERSHIP_TYPE
  | SET_INDUESTY
  | RESET
