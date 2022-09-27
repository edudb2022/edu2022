import { AcademicStatusTypesId, SchoolTypeId } from "./common"

export interface GetSchoolRes {
  id: number
  aliases: string[]
  chineseName: string
  englishName: string
  faculties: Ifaculties[]
  report: IReport[]
  shortName: string
  type: ISchoolType
}

export interface GetSchoolDetailReivew {
  id: number
  createdAt: Date
  likes: number
  dislikes: number
  title: string
  admissionYear: string
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
