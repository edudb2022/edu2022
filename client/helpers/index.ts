// import { ISchoolsReviewCardProps } from "../components/common/cards/review"
import { ISchoolsReviewCardProps } from "../components/common/cards/review/school"
import { DSE_GRADE_TO_SOCRE_MAPPER } from "../mappers/dseGrade"
import { DSEGradeTypesId, SchoolTypeId } from "../types/common"

type IGradeMeta = DSEGradeTypesId | null
export const CommonHelpers = {
  schoolFilter: (
    list: Omit<ISchoolsReviewCardProps, "type">[],
    search: string,
    type: SchoolTypeId
  ): Omit<ISchoolsReviewCardProps, "type">[] => {
    const arr: Omit<ISchoolsReviewCardProps, "type">[] = []

    list.forEach((data: Omit<ISchoolsReviewCardProps, "type">) => {
      if (
        (data.schoolChineseName.includes(search) ||
          data.schoolEnglishName.includes(search) ||
          data.schoolShortName.includes(search)) &&
        data.schoolTypeId === type
      ) {
        arr.push(data)
      }
    })
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
        console.log(bestFiveScore, value)
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
  }
}
