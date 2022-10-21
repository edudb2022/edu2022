// import { ISchoolsReviewCardProps } from "../components/common/cards/review"
import { ISchoolsReviewCardProps } from "../components/common/cards/review/school"
import { DSE_GRADE_TO_SOCRE_MAPPER } from "../mappers/dseGrade"
import { GetSchoolRes } from "../types/api"
import { DSEGradeTypesId, SchoolTypeId } from "../types/common"

type IGradeMeta = DSEGradeTypesId | null
export const CommonHelpers = {
  schoolFilter: (
    list: GetSchoolRes[] | undefined,
    search: string,
    type: SchoolTypeId
  ): GetSchoolRes[] => {
    const arr: GetSchoolRes[] = []
    const lowerCaseSearchtext = search.toLowerCase()
    if (list) {
      list.forEach((data) => {
        if (
          data.chineseName.toLocaleLowerCase().includes(lowerCaseSearchtext) ||
          data.englishName.toLocaleLowerCase().includes(lowerCaseSearchtext) ||
          data.shortName.toLocaleLowerCase().includes(lowerCaseSearchtext)
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
        bestFiveScore += DSE_GRADE_TO_SOCRE_MAPPER[value]
      }
    }

    if (gradeMeta.every(isBelowThreshold)) {
      for (let i = 0; i < gradeMeta.length; i++) {
        const value = gradeMeta[i]
        if (value !== null) {
          bestSixScore += DSE_GRADE_TO_SOCRE_MAPPER[value]
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
  }
}
