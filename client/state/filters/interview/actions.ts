import { ApplicationTypeId, InterviewSortingTypes } from "../../../types/common"

export enum IInterviewFilterActionTypes {
  SET_SORTING = "FILTER:INTERVIEW:SET_SORTING",
  SET_ADMISSION_TYPE = "FILTER:INTERVIEW:SET_ADMISSION_TYPE",
  RESET = "FILTER:INTERVIEW:RESET"
}

export interface IInterviewFilterState {
  sorting: InterviewSortingTypes
  admissionType: "" | ApplicationTypeId
}

export interface SET_SORTING {
  payload: InterviewSortingTypes.POST_DATE_DESCENDING
  type: typeof IInterviewFilterActionTypes.SET_SORTING
}

export interface SET_ADMISSION_TYPE {
  payload: "" | ApplicationTypeId
  type: typeof IInterviewFilterActionTypes.SET_ADMISSION_TYPE
}

export interface RESET {
  payload: undefined
  type: typeof IInterviewFilterActionTypes.RESET
}

export type IInterviewFilterAction = SET_SORTING | SET_ADMISSION_TYPE | RESET
