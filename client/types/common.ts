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
  JUPAS = "Jupas",
  NON_JUPAS = "Non-jupas",
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

// export enum VOTE_TYPE {
//   LIKED = "like",
//   DISLIKE = "dislike"
// }

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
export enum VoteTypeId {
  LIKED = 1,
  DISLIKE = -1
}

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

export enum DSEJupasChoicePriorityTypesId {
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
  UNIVERSITY,
  FRIENDS,
  OTHER
}

export enum AcademicStatusTypesId {
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
  TELEGRAM,
  WHATSAPP,
  SIGNAL,
  OTHER
}

export enum HonorTypesId {
  FIRST = 1,
  SECOND_UP,
  SECOND_LOW,
  THIRD,
  SUMMA_CUM_LAUDE,
  MAGNA_CUM_LAUDE,
  CUM_LAUDE,
  PASS
}

// export enum DSEGradeId {
//   UNCLASSIFIED = 1,
//   ONE,
//   TWO,
//   THREE,
//   FOUR,
//   FIVE,
//   FIVE_START,
//   FIVE_DOUBLE_STAR,
//   PASS, //displat Text :達標/合格不
//   FAIL //displat Text :不達標/不合格
// }

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

export enum DSESubjectId {
  CHINESE_LANGUAGE = 1,
  ENGLISH_LANGUAGE,
  MATHEMATICS_COMPULSORY_PART,
  CITIZENSHIP_AND_SOCIAL_DEVELOPMENT,
  LIBERAL_STUDIES,
  BIOLOGY,
  CHEMISTRY,
  ECONOMICS,
  BUSINESS_ACCOUNTING_AND_FINANCIAL_STUDIES,
  PHYSICS,
  GEOGRAPHY,
  M1,
  M2,
  CHINESE_HISTORY,
  INFORMATION_AND_COMMUNICATION_TECHOLOGY,
  TOURISM_AND_HOSPITALITY_STUDIES,
  VISUAL_ARTS,
  CHINESE_LITERATURE,
  PHYSICAL_EDUCATION,
  HEALTH_MANAGEMENT_AND_SOCIAL_CARE,
  ETHICS_AND_RELIGIOUS_STUDIES,
  DESIGN_AND_APPLIED_TECHNOLOGY,
  COMBINED_SCIENCE,
  LITERATURE_IN_ENGLISH,
  TECHNOLOGY_AND_LIVING,
  MUSIC,
  INTEGRATED_SCIENCE
}

//sorting
export enum SchoolSortingTypes {
  POST_DATE_ASCENDING = "createdAt,ASC",
  POST_DATE_DESCENDING = "createdAt,DESC",
  ADMISSION_DATE_ASCENDING = "admissionDate,ASC",
  ADIMSSION_DATE_DESCENDING = "admissionDate,DESC",
  VOTE_ASCENDING = "vote,ASC",
  VOTE_DESCENDING = "vote,DESC",
  RECOMMENDATION_ASCENDING = "recommendation,ASC",
  RECOMMENDATION_DESCENDING = "recommendation,DESC"
}

export enum ProgrammeSortingTypes {
  POST_DATE_ASCENDING = "createdAt,ASC",
  POST_DATE_DESCENDING = "createdAt,DESC",
  ADMISSION_DATE_ASCENDING = "admissionDate,ASC",
  ADIMSSION_DATE_DESCENDING = "admissionDate,DESC",
  VOTE_ASCENDING = "vote,ASC",
  VOTE_DESCENDING = "vote,DESC",
  RECOMMENDATION_ASCENDING = "recommendation,ASC",
  RECOMMENDATION_DESCENDING = "recommendation,DESC"
}

export enum InterviewSortingTypes {
  POST_DATE_ASCENDING = "createdAt,ASC",
  POST_DATE_DESCENDING = "createdAt,DESC",
  INTERVIEW_DATE_ASCENDING = "interviewDate,ASC",
  INTERVIEW_DATE_DESCENDING = "interviewDate,DESC",
  VOTE_ASCENDING = "vote,ASC",
  VOTE_DESCENDING = "vote,DESC",
  DIFFICULTY_ASCENDING = "difficulty,ASC",
  DIFFICULTY_DESCENDING = "difficulty,DESC",
  BESTFIVE_ASCENDING = "bestFive,ASC",
  BESTFIVE_DESCENDING = "bestFive,DESC",
  BESTSIX_ASCENDING = "bestSix,ASC",
  BESTSIX_DESCENDING = "bestSix,DESC",
  GPA_ASCENDING = "gpa,ASC",
  GAP_DESCENDING = "gpa,DESC"
}

export enum admissionOfferSortingTypes {
  POST_DATE_ASCENDING = "createdAt,ASC",
  POST_DATE_DESCENDING = "createdAt,DESC",
  OFFER_RECEIVED_DATE_ASCENDING = "offerReceivedDate,ASC",
  OFFER_RECEIVED_DATE_DESCENDING = "offerReceivedDate,DESC",
  VOTE_ASCENDING = "vote,ASC",
  VOTE_DESCENDING = "vote,DESC",
  BESTFIVE_ASCENDING = "bestFive,ASC",
  BESTFIVE_DESCENDING = "bestFive,DESC",
  BESTSIX_ASCENDING = "bestSix,ASC",
  BESTSIX_DESCENDING = "bestSix,DESC",
  GPA_ASCENDING = "gpa,ASC",
  GAP_DESCENDING = "gpa,DESC"
}

export enum InternshipOfferSortingTypes {
  POST_DATE_ASCENDING = "createdAt,ASC",
  POST_DATE_DESCENDING = "createdAt,DESC",
  OFFER_RECEIVED_DATE_ASCENDING = "offerReceivedDate,ASC",
  OFFER_RECEIVED_DATE_DESCENDING = "offerReceivedDate,DESC",
  VOTE_ASCENDING = "vote,ASC",
  VOTE_DESCENDING = "vote,DESC",
  DIFFICULTY_ASCENDING = "difficulty,ASC",
  DIFFICULTY_DESCENDING = "difficulty,DESC",
  SALARY_ASCENDING = "salary,ASC",
  SALARY_DESCENDING = "salary,DESC"
}

export enum gradJobOfferSortingTypes {
  POST_DATE_ASCENDING = "createdAt,ASC",
  POST_DATE_DESCENDING = "createdAt,DESC",
  OFFER_RECEIVED_DATE_ASCENDING = "offerReceivedDate,ASC",
  OFFER_RECEIVED_DATE_DESCENDING = "offerReceivedDate,DESC",
  VOTE_ASCENDING = "vote,ASC",
  VOTE_DESCENDING = "vote,DESC",
  DIFFICULTY_ASCENDING = "difficulty,ASC",
  DIFFICULTY_DESCENDING = "difficulty,DESC",
  HOPE_ASCENDING = "hope,ASC",
  HOPE_DESCENDING = "hope,DESC",
  SALARY_ASCENDING = "salary,ASC",
  SALARY_DESCENDING = "salary,DESC"
}
