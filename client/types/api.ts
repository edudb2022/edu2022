import { number } from "yup"
import {
  AcademicStatusTypeId,
  ApplicationTypeId,
  ContactMethodTypeId,
  CurrentSchoolTypeId,
  DSEGradeTypeId,
  DSESubjectId,
  InternshipTypeId,
  JobSourceTypeId,
  JobTypeId,
  SchoolTypeId,
  TUserId,
  YearOfStudyTypeId
} from "./common"

export interface IGetSchoolRes {
  id: number
  aliases: string[]
  chineseName: string
  englishName: string
  faculties: IFaculties[]
  report: IReport[]
  shortName: string
  type: ISchoolType
}

export interface IGetSchoolDetailReviewRes {
  id: number
  createdAt: string
  likes: number
  dislikes: number
  title: string
  admissionDate: string
  anonymous: boolean
  user: IUserRes
  // program: {
  //   id: number
  //   chineseName: string
  //   englishName: string
  //   jupasCode: string
  // }
  school: {
    id: number
    shortName: string
    type: { id: number; displayText: string; guiOrder: number }
  }
  academicStatus: string | undefined
  contactMethod: IContactMethodRes | null
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
  votes: number
}

export interface IGetProgrammeDetailReviewRes {
  id: number
  createdAt: string
  title: string
  admissionDate: string
  anonymous: number
  academicStatusId: AcademicStatusTypeId
  program: IProgrammeRes
  user: IUserRes
  academicStatus: string
  contactMethod: IContactMethodRes | null
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
  voteOfUser: number
  votes: number
}

export interface IGetInterviewDetailReviewRes {
  id: number
  createdAt: string
  title: string
  interviewDate: string
  likes: number
  anonymous: boolean
  dislikes: number
  program: IProgrammeRes
  user: IUserRes
  dressCode: { displayText: string }
  applicationType: { displayText: string }
  currentSchoolType: { id: number; displayText: string }
  currentYearOfStudy: { id: number; displayText: string }
  currentProgram: IProgrammeRes
  contactMethod: IContactMethodRes | null
  voteOfUser: number
  votes: number
  dseScores: IDseScoresRes[]
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
}

export interface IGetInternshipDetailReviewRes {
  title: string
  internshipType: IInternshipRes
  companyName: string
  jobTitle: string
  offerReceiveDate: string
  bonus: number
  stockOptions: number
  baseSalary: number
  jobType: IJopTypeRes
  jobPostSource: IJobPostSourceRes
  id: number
  createdAt: string
  user: IUserRes
  // likes*	number
  // dislikes*	number
  program: IProgrammeRes
  anonymous: boolean
  // voteOfUser*	{...}
  votes: number
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
}

export interface ICreateSchoolReviewReq {
  schoolId: number
  title: string
  academicStatusId: AcademicStatusTypeId | null
  admissionDate: string
  contactMethod: IContactMethod
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
  userId: TUserId
  anonymous: boolean
}
export interface ICreateProgrammeReviewReq {
  programId: number
  title: string
  academicStatusId: AcademicStatusTypeId | null
  admissionDate: string
  contactMethod: IContactMethod
  userId: TUserId
  anonymous: boolean
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
}

export interface ICreateInterviewReviewReq {
  userId: TUserId
  programId: number
  dressCodeId: number | null
  title: string
  applicationTypeId?: ApplicationTypeId | null
  currentSchoolTypeId?: CurrentSchoolTypeId | null
  currentYearOfStudyId?: YearOfStudyTypeId | null
  currentProgramId?: number | null
  gpa: number | null
  dseScores: IDseScores[] | null
  interviewDate: string
  contactMethod: IContactMethod
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
  anonymous: boolean
}

export interface ICreateInternshipReviewReq {
  programId: number
  internshipTypeId: InternshipTypeId
  title: string
  gpa: number | null
  jobTypeId: JobTypeId
  jobPostSourceId: JobSourceTypeId | null
  companyName: string
  jobTitle: string
  offerReceiveDate: string
  baseSalary: number
  bonus: number
  stockOptions: number
  contactMethod: IContactMethod
  userId: number
  anonymous: boolean
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
}

export interface IVoteReq {
  id: number
  value: number
}
export interface IDseScores {
  gradeId: DSEGradeTypeId
  subjectId: DSESubjectId
}
interface ILongQuestionResponses {
  questionId: number
  text: string | null | ""
}
interface IRatingQuestionResponses {
  questionId: number
  optionId: number
}

interface IContactMethod {
  typeId: ContactMethodTypeId | null
  value: string | null
}
interface ISchoolType {
  id: number
  displayText: string
  guiOrder: number
}

export interface IFaculties {
  name: string
  schoolId: number
}

export interface IReport {
  ratingQuestion: string
  averageScore: number
}

export interface IProgrammeRes {
  id: number
  chineseName: string
  englishName: string
  jupasCode: string
}

export interface IUserRes {
  id: string
  name: string
  hasSchoolBadge: number
}

export interface IContactMethodRes {
  value: string
  type: string
}

export interface IInternshipRes {
  id: number
  displayText: string
}

export interface IJopTypeRes {
  id: number
  displayText: string
}

export interface IJobPostSourceRes {
  id: number
  displayText: string
}

export interface IDseScoresRes {
  subject: {
    id: number
    displayText: string
  }
  grade: {
    id: number
    displayText: string
    value: number
  }
}
