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
  createdAt: Date
  likes: number
  dislikes: number
  title: string
  admissionYear: string
  anonymous: boolean
  user: { id: string; name: string }
  academicStatus: {
    id: number
    displaytext: string
  }[]
  ratingQuestionResponses: {
    optionId: 2
    questionId: 1
  }[]
  longQuestionResponses: {
    text: string
    questionId: number
  }[]
  votes: number
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
