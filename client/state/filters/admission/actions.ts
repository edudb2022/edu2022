import {
  ADMISSION_LEVEL_TYPE,
  ADMISSION_OFFER_TYPE,
  ADMISSION_TYPE
} from "../../../types/common"

export enum IAdmissionFilterActionTypes {
  SET_SORTING = "FILTER:ADMISSION:SET_SORTING",
  SET_OFFER_TYPE = "FILTER:ADMISSION:SET_OFFER_TYPE",
  SET_ADMISSION_TYPE = "FILTER:ADMISSION:SET_ADMISSION_TYPE",
  SET_ADMISSION_LEVEL = "FILTER:ADMISSION:SET_ADMISSION_LEVEL",
  SET_YEAT_OF_STUDY = "FILTER:ADMISSION:SET_YEAT_OF_STUDY",
  RESET = "FILTER:ADMISSION:RESET"
}

export interface IAdmissionFilterState {
  sorting: "" | string
  offerType: "" | ADMISSION_OFFER_TYPE
  admissionType: "" | ADMISSION_TYPE
  admissionLevel: "" | ADMISSION_LEVEL_TYPE
  yearOfStudy: string
}

export interface SET_SORTING {
  payload: string
  type: typeof IAdmissionFilterActionTypes.SET_SORTING
}

export interface SET_OFFER_TYPE {
  payload: "" | ADMISSION_OFFER_TYPE
  type: typeof IAdmissionFilterActionTypes.SET_OFFER_TYPE
}

export interface SET_ADMISSION_TYPE {
  payload: "" | ADMISSION_TYPE
  type: typeof IAdmissionFilterActionTypes.SET_ADMISSION_TYPE
}

export interface SET_ADMISSION_LEVEL {
  payload: "" | ADMISSION_LEVEL_TYPE
  type: typeof IAdmissionFilterActionTypes.SET_ADMISSION_LEVEL
}

export interface SET_YEAT_OF_STUDY {
  payload: string
  type: typeof IAdmissionFilterActionTypes.SET_YEAT_OF_STUDY
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
  | SET_YEAT_OF_STUDY
  | RESET