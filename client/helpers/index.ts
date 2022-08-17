// import { ISchoolsReviewCardProps } from "../components/common/cards/review"
import { ISchoolsReviewCardProps } from "../components/common/cards/review/school"
import { SchoolTypeId } from "../types/common"

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
        // if(data not in)

        // setList([...list, data])
        arr.push(data)
      }
    })
    return arr
  }
}
