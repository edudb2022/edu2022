export type ID = string
export type UserName = string
export type SchoolName = string

export enum ROLE {
  USER = "user",
  ADMIN = "admin"
}

export enum SCORE_TYPE {
  BEST_FIVE = "Best 5",
  BEST_SIX = "Best 6",
  GPA = "GPA"
}

export enum SCHOOL_TYPE {
  UNIVERSITY = "university",
  COLLEGE = "college",
  SECONDARY_SCHOOL = "secondary school"
}

export enum ADMISSION_TYPE {
  JUPAS = "jupas",
  NON_JUPAS = "non-jupas",
  BACHELOR = "Bachelor"
}

export enum ADMISSION_OFFER_TYPE {
  DIRECT = "Direct",
  CONDITIONAL = "Conditional"
}

export enum ADMISSION_LEVEL_TYPE {
  ONE = "Year 1",
  TWO = "Year 2",
  THREE = "Year 3",
  FOUR = "Year 4",
  FIVE = "Year 5",
  FIVE_PLUS = "Year 5+"
}

export enum VOTE_TYPE {
  LIKED = "like",
  DISLIKE = "dislike"
}

export interface ISelectMenuItemsType<T, U> {
  value: T
  title: U
}

// interface KeyPair<T, U> {
//   key: T
//   value: U
// }

export interface ISchoolTypeIdTypes
  extends ISelectMenuItemsType<SchoolTypeId, string> {}

export enum SchoolTypeId {
  UNIVERSITY = 1,
  COLLEGE
}
