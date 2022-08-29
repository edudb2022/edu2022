import { SchoolTypeId, SCHOOL_TYPE } from "../types/common"

export const uni = [
  {
    id: "1",
    schoolChineseName: "香港科技大學",
    schoolEnglishName: "Hong Kong University of Science and Technology",
    schoolShortName: "hkust",
    schoolTypeId: SchoolTypeId.UNIVERSITY,
    totalReports: 1
  },
  {
    id: "2",
    schoolChineseName: "香港大學",
    schoolEnglishName: "University of Hong Kong",
    schoolShortName: "hku",
    schoolTypeId: SchoolTypeId.UNIVERSITY,

    totalReports: 123123123
  }
  // {
  //   id: "2",
  //   schoolChineseName: "香港大學",
  //   schoolEnglishName: "University of Hong Kong",
  //   schoolShortName: "hku",
  //   schoolTypeId: SchoolTypeId.UNIVERSITY,

  //   totalReports: 123123123
  // },
  // {
  //   id: "2",
  //   schoolChineseName: "香港大學",
  //   schoolEnglishName: "University of Hong Kong",
  //   schoolShortName: "hku",
  //   schoolTypeId: SchoolTypeId.UNIVERSITY,

  //   totalReports: 123123123
  // },
  // {
  //   id: "2",
  //   schoolChineseName: "香港大學",
  //   schoolEnglishName: "University of Hong Kong",
  //   schoolShortName: "hku",
  //   schoolTypeId: SchoolTypeId.UNIVERSITY,

  //   totalReports: 123123123
  // },
  // {
  //   id: "2",
  //   schoolChineseName: "香港大學",
  //   schoolEnglishName: "University of Hong Kong",
  //   schoolShortName: "hku",
  //   schoolTypeId: SchoolTypeId.UNIVERSITY,

  //   totalReports: 123123123
  // },
  // {
  //   id: "3",
  //   schoolChineseName: "香港中文大學",
  //   schoolEnglishName: "The Chinese University of Hong Kong",
  //   schoolShortName: "hkcu",
  //   schoolTypeId: SchoolTypeId.COLLEGE,
  //   totalReports: 1
  // },
  // {
  //   id: "4",
  //   schoolChineseName: "香港大學",
  //   schoolEnglishName: "The Chinese University of Hong Kong",
  //   schoolShortName: "Poly",
  //   schoolTypeId: SchoolTypeId.COLLEGE,
  //   totalReports: 1
  // },
  // {
  //   id: "5",
  //   schoolChineseName: "香港中文大學",
  //   schoolEnglishName: "The Chinese University of Hong Kong",
  //   schoolShortName: "hkcu",
  //   schoolTypeId: "大學",
  //   totalReports: 1
  // },
  // {
  //   id: "6",
  //   schoolChineseName: "香港中文大學",
  //   schoolEnglishName: "The Chinese University of Hong Kong",
  //   schoolShortName: "hkcu",
  //   schoolTypeId: "大學",
  //   totalReports: 1
  // }
]

const schoolTypeOptions = [
  {
    value: SCHOOL_TYPE.COLLEGE,
    title: SCHOOL_TYPE.COLLEGE
  },
  {
    value: SCHOOL_TYPE.UNIVERSITY,
    title: SCHOOL_TYPE.UNIVERSITY
  }
]

export const college = [
  {
    id: "1",
    schoolChineseName: "香港專業教育學院",
    schoolEnglishName: "Hong Kong Institute of Vocational Education",
    schoolShortName: "IVE",
    schoolTypeId: "大學",
    totalReports: 1
  }
]

export { schoolTypeOptions }
