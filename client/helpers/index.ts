// import { ISchoolsReviewCardProps } from "../components/common/cards/review"
import { ISchoolsReviewCardProps } from "../components/common/cards/review/school"
import { ISchoolTypeIdTypes, SchoolTypeId } from "../types/common"

export const CommonHelpers = {
  schoolFilter: (
    list: ISchoolsReviewCardProps[],
    search: string,
    schoolTypesId: SchoolTypeId
  ): ISchoolsReviewCardProps[] => {
    const arr: ISchoolsReviewCardProps[] = []

    list.map((data: ISchoolsReviewCardProps) => {
      if (
        data.schoolChineseName &&
        data.schoolEnglishName &&
        data.schoolShortName &&
        (data.schoolChineseName.includes(search) ||
          data.schoolEnglishName.includes(search) ||
          data.schoolShortName.includes(search) ||
          data.schoolTypeId === schoolTypesId)
      ) {
        // if(data not in)

        // setList([...list, data])
        arr.push(data)
      }
    })
    return arr
  }
}
