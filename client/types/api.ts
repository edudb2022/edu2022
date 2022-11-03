import {
  AcademicStatusTypesId,
  ContactMethodTypeId,
  SchoolTypeId
} from "./common"

export interface IGetSchoolRes {
  id: number
  aliases: string[]
  chineseName: string
  englishName: string
  faculties: Ifaculties[]
  report: IReport[]
  shortName: string
  type: ISchoolType
}

export interface IGetSchoolDetailReivew {
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

export interface ICreateSchoolReviewRes {
  schoolId: number
  title: string
  academicStatusId: AcademicStatusTypesId
  admissionDate: Date
  contactMethod: IContactMethod
  ratingQuestionResponses: IRatingQuestionResponses[]
  longQuestionResponses: ILongQuestionResponses[]
  userId: number
  anonymous: boolean
}

interface ILongQuestionResponses {
  questionId: number
  text: string
}
interface IRatingQuestionResponses {
  questionId: number
  optionId: number
}

interface IContactMethod {
  typeId: ContactMethodTypeId
  value: string
}
interface ISchoolType {
  id: SchoolTypeId
  schoolId: string
}

export interface Ifaculties {
  name: string
  schoolId: number
}

export interface IReport {
  ratingQuestion: string
  averageScore: number
}
