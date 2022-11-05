import {
  AdmissionLevelTypeId,
  admissionOfferSortingTypes,
  AdmissionOfferTypeId,
  ADMISSION_LEVEL_TYPE,
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE,
  ApplicationTypeId,
  YearOfStudyTypeId
} from "../../../types/common"

export enum IAdmissionFilterActionTypes {
  SET_SORTING = "FILTER:ADMISSION:SET_SORTING",
  SET_OFFER_TYPE = "FILTER:ADMISSION:SET_OFFER_TYPE",
  SET_ADMISSION_TYPE = "FILTER:ADMISSION:SET_ADMISSION_TYPE",
  SET_ADMISSION_LEVEL = "FILTER:ADMISSION:SET_ADMISSION_LEVEL",
  SET_YEAR_OF_STUDY = "FILTER:ADMISSION:SET_YEAR_OF_STUDY",
  RESET = "FILTER:ADMISSION:RESET"
}

export interface IAdmissionFilterState {
  sorting: admissionOfferSortingTypes
  offerType: "" | AdmissionOfferTypeId
  admissionType: "" | ApplicationTypeId
  admissionLevel: "" | AdmissionLevelTypeId
  yearOfStudy: "" | YearOfStudyTypeId
}

export interface SET_SORTING {
  payload: admissionOfferSortingTypes
  type: typeof IAdmissionFilterActionTypes.SET_SORTING
}

export interface SET_OFFER_TYPE {
  payload: "" | AdmissionOfferTypeId
  type: typeof IAdmissionFilterActionTypes.SET_OFFER_TYPE
}

export interface SET_ADMISSION_TYPE {
  payload: "" | ApplicationTypeId
  type: typeof IAdmissionFilterActionTypes.SET_ADMISSION_TYPE
}

export interface SET_ADMISSION_LEVEL {
  payload: "" | AdmissionLevelTypeId
  type: typeof IAdmissionFilterActionTypes.SET_ADMISSION_LEVEL
}

export interface SET_YEAR_OF_STUDY {
  payload: YearOfStudyTypeId
  type: typeof IAdmissionFilterActionTypes.SET_YEAR_OF_STUDY
}

export interface RESET {
  payload: undefined
  type: typeof IAdmissionFilterActionTypes.RESET
}

export type IAdmissionFilterAction =
  | SET_SORTING
  | SET_OFFER_TYPE
  | SET_ADMISSION_TYPE
  | SET_ADMISSION_LEVEL
  | SET_YEAR_OF_STUDY
  | RESET
