import { SchoolTypeId } from "./common"

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
