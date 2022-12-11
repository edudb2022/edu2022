// import { ISchoolsReviewCardProps } from "../components/common/cards/review"
import dayjs from "dayjs"
import { ISchoolsReviewCardProps } from "../components/common/cards/review/school"
import { DseGradeToScoreMapper } from "../mappers/dseGrade"
import { IGetSchoolRes } from "../types/api"
import { DSEGradeTypeId, SchoolTypeId } from "../types/common"

type IGradeMeta = DSEGradeTypeId | null
export const CommonHelpers = {
  schoolFilter: (
    list: IGetSchoolRes[] | undefined,
    search: string,
    type: SchoolTypeId
  ): IGetSchoolRes[] => {
    const arr: IGetSchoolRes[] = []
    const lowerCaseSearchText = search.toLowerCase()
    if (list) {
      list.forEach((data) => {
        if (
          data.chineseName.toLocaleLowerCase().includes(lowerCaseSearchText) ||
          data.englishName.toLocaleLowerCase().includes(lowerCaseSearchText) ||
          data.shortName.toLocaleLowerCase().includes(lowerCaseSearchText)
          //   &&
          // data.type.id === type
        ) {
          arr.push(data)
        }
      })
    }
    return arr
  },

  DseGradeToScore: (gradeMeta: IGradeMeta[]) => {
    let bestFiveScore = 0
    let bestSixScore = 0
    const isBelowThreshold = (gradeMeta: IGradeMeta) => gradeMeta !== null
    for (let i = 0; i < gradeMeta.length - 1; i++) {
      const value = gradeMeta[i]
      if (value !== null) {
        bestFiveScore += DseGradeToScoreMapper[value]
      }
    }

    if (gradeMeta.every(isBelowThreshold)) {
      for (let i = 0; i < gradeMeta.length; i++) {
        const value = gradeMeta[i]
        if (value !== null) {
          bestSixScore += DseGradeToScoreMapper[value]
        }
      }
    }
    // else {
    //   bestSixScore = -1
    // }

    return { bestFiveScore, bestSixScore }
  },

  salaryConvertor: (salary: number) => {
    if (salary > 1000000) return `${salary / 1000000}M`
    if (salary > 1000) return `${salary / 1000}k`
    if (salary > 0) return `${salary}`
    else return `${salary}`
  },

  dayRange: (years: number, days: number) => {
    return new Date(
      new Date().setDate(new Date().getDate() + days + years * 365)
    )
  },

  formatData: (date: Date, format?: string, toISO?: boolean) => {
    if (toISO) return dayjs(date).toISOString()
    return dayjs(date).format(format)
  }
}
