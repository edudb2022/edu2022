import {
  AcademicStatusTypeId,
  ContactMethodTypeId,
  SchoolTypeId,
  TUserId
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
  userId: TUserId
  programId: number
  title: string
  academicStatusId: AcademicStatusTypeId | null
  admissionDate: string
  contactMethod: IContactMethod
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
  anonymous: boolean
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
  id: SchoolTypeId
  schoolId: string
}

export interface IFaculties {
  name: string
  schoolId: number
}

export interface IReport {
  ratingQuestion: string
  averageScore: number
}
