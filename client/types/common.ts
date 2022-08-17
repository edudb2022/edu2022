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

// export interface ISchoolTypeIdTypes
//   extends ISelectMenuItemsType<SchoolTypeId, string> {}

export enum DressCodeTypeId {
  FORMAL = 1,
  SMART_CASUAL,
  CASUAL,
  FREE
}

export enum SchoolTypeId {
  UNIVERSITY = 1,
  COLLEGE
}

export enum ApplicationTypeId {
  JUPAS = 1,
  NON_JUPAS,
  BACHELOR
}

export enum DSEJupasChoicePriorityId {
  BAND_A_ONE = 1,
  BAND_A_TWO,
  BAND_A_THREE,
  BAND_B,
  BAND_C,
  OTHER
}

export enum AdmissionOfferTypeId {
  CONDITIONAL = 1,
  DIRECT
}

export enum InternshipTypesId {
  SUMMER = 1,
  WINTER,
  PLACEMENT
}

export enum AdmissionLevelTypesId {
  YEAR_ONE = 1,
  YEAR_TWO,
  YEAR_THREE,
  YEAR_FOUR,
  YEAR_FIVE_PLUS
}

export enum YearOfStudyTypeslId {
  YEAR_ONE = 1,
  YEAR_TWO,
  YEAR_THREE,
  YEAR_FOUR,
  YEAR_FIVE_PLUS
}

export enum JobSourceTypesId {
  JIJIS = 1,
  LINKEDIN,
  INDEED,
  JOBSDB,
  COMPANY_WEBSITE,
  UNIVERSITY_CAREER_CENTER,
  FRIENDS,
  OTHERS
}

export enum AcademicStatusId {
  YEAR_ONE = 1,
  YEAR_TWO,
  YEAR_THERE,
  YEAR_FOUR,
  YEAR_FIVE_PLUS,
  POSTGRAD,
  ALUMI,
  OTHER
}

export enum ContactMethodTypeId {
  EMAIL = 1,
  TELEGRAM = 2,
  WHATSAPP = 3,
  SIGNAL = 4,
  OTHERS = 5
}

export enum HonorId {
  FIRST = 1,
  SECOND_UP,
  SECOND_LOW,
  THIRD,
  SUMMA_CUM_LAUDE,
  MAGNA_CUM_LAUDE,
  CUM_LAUDE,
  PASS
}

export enum DSEGradeId {
  UNCLASSIFIED = 1,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  FIVE_START,
  FIVE_DOUBLE_STAR,
  PASS, //displat Text :達標/合格不
  FAIL //displat Text :不達標/不合格
}

export enum DSEGradeTypesId {
  ONE = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  FIVE_START,
  FIVE_DOUBLE_STAR,
  PASS, //displat Text :達標/合格不
  FAIL, //displat Text :不達標/不合格
  UNCLASSIFIED = 1
}
