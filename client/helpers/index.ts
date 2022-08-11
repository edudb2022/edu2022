import { IBaseReviewCardProps } from "../components/common/cards/review"
import { SCHOOL_TYPE } from "../types/common"

export const CommonHelper = {
  schoolFilter: (
    list: IBaseReviewCardProps[],
    search: string,
    schoolTypes: SCHOOL_TYPE
  ): IBaseReviewCardProps[] => {
    const arr: IBaseReviewCardProps[] = []

    list.map((data: IBaseReviewCardProps) => {
      if (
        // search.length ||
        data.schoolChineseName.includes(search) ||
        data.schoolEnglishName.includes(search) ||
        data.schoolShortName.includes(search) ||
        data.type === schoolTypes
      ) {
        // if(data not in)
        // console.log("data", data)
        // setList([...list, data])
        arr.push(data)
      }
    })
    return arr
  }
}
