export type ID = string;
export type UserName = string;
export type SchoolName = string;

export enum ROLE {
  USER = "user",
  ADMIN = "admin",
}

export enum SCORE_TYPE {
  BEST_FIVE = "Best 5",
  BEST_SIX = "Best 6",
  GPA = "Gpa",
}

export enum ADMISSION_TYPE {
  JUPAS = "jupas",
  NON_JUPAS = "non-jupas",
  BACHELOR = "Bachelor",
}
