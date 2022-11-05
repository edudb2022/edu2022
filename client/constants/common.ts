import {
  AcademicStatusTypeId,
  AdmissionLevelTypeId,
  admissionOfferSortingTypes,
  AdmissionOfferTypeId,
  ApplicationTypeId,
  ContactMethodTypeId,
  CurrentSchoolTypeId,
  DressCodeTypeId,
  DSEGradeTypeId,
  DSEJupasChoicePriorityTypeId,
  gradJobOfferSortingTypes,
  HonorTypeId,
  InternshipOfferSortingTypes,
  InternshipTypeId,
  InterviewSortingTypes,
  JobSourceTypeId,
  ProgrammeSortingTypes,
  SchoolSortingTypes,
  SchoolTypeId,
  YearOfStudyTypeId
} from "../types/common"

const SITENAME = "GoodTurtle.fyi"
// const dressCodeOptions = [
//   { value: "", title: "Please Select" },
//   { value: "formal", title: "formal" },
//   { value: "smartCasual", title: "Smart Casual" },
//   { value: "casual", title: "Casual" },
//   { value: "upToYou", title: "Up to You" }
// ]

// const jobSourceOptions = [
//   { value: "", title: "Please Select" },
//   { value: "jijis", title: "Jijis" },
//   { value: "universityCareerCentre", title: "University Career Centre" },
//   { value: "linkedIn", title: "LinkedIn" },
//   { value: "jobsDb", title: "JobsDb" },
//   { value: "indeed", title: "Indeed" },
//   { value: "CompanyWebsite", title: "CompanyWebsite" },
//   { value: "Friends", title: "frends recommendation" },
//   { value: "others", title: "others " }
// ]

// const internTypeOptions = [
//   { value: "", title: "Please Select" },
//   { value: "summer", title: "summer" },
//   { value: "winter", title: "winter" },
//   { value: "placement", title: "placement" }
// ]

const schoolTypesList = [
  { value: SchoolTypeId.UNIVERSITY, title: "大學" },
  { value: SchoolTypeId.COLLEGE, title: "大專" }
]
const currentSchoolTypesList = [
  { value: CurrentSchoolTypeId.UNIVERSITY, title: "大學" },
  { value: CurrentSchoolTypeId.COLLEGE, title: "大專" },
  { value: CurrentSchoolTypeId.SECONDARY_SCHOOL, title: "中學" },
  { value: CurrentSchoolTypeId.RETAKER, title: "重讀生" },
  { value: CurrentSchoolTypeId.OTHER, title: "其他" }
]

const applicationTypesList = [
  { value: ApplicationTypeId.JUPAS, title: "Jupas" },
  { value: ApplicationTypeId.NON_JUPAS, title: "Non-Jupas" },
  { value: ApplicationTypeId.BACHELOR, title: "Bachelor" },
  { value: ApplicationTypeId.OTHER, title: "其他" }
]

const dressCodeTypesList = [
  { value: DressCodeTypeId.FORMAL, title: "Formal" },
  { value: DressCodeTypeId.SMART_CASUAL, title: "Smart caual" },
  { value: DressCodeTypeId.CASUAL, title: "Casual" },
  { value: DressCodeTypeId.FREE, title: "是但" }
]

const DSEJupasChoicePriorityTypesList = [
  { value: DSEJupasChoicePriorityTypeId.BAND_A_ONE, title: "A1" },
  { value: DSEJupasChoicePriorityTypeId.BAND_A_TWO, title: "A2" },
  { value: DSEJupasChoicePriorityTypeId.BAND_A_THREE, title: "A3" },
  { value: DSEJupasChoicePriorityTypeId.BAND_B, title: "B" },
  { value: DSEJupasChoicePriorityTypeId.BAND_C, title: "C" },
  { value: DSEJupasChoicePriorityTypeId.OTHER, title: "其他" }
]

const admissionOfferTypesList = [
  { value: AdmissionOfferTypeId.DIRECT, title: "Direct" },
  { value: AdmissionOfferTypeId.CONDITIONAL, title: "Conditional" }
]
const internshipTypesList = [
  { value: InternshipTypeId.SUMMER, title: "Summer" },
  { value: InternshipTypeId.WINTER, title: "Winter" },
  { value: InternshipTypeId.PLACEMENT, title: "Placement" }
]

const admissionLevelTypesList = [
  { value: AdmissionLevelTypeId.YEAR_ONE, title: "Year 1" },
  { value: AdmissionLevelTypeId.YEAR_TWO, title: "Year 2" },
  { value: AdmissionLevelTypeId.YEAR_THREE, title: "Year 3" },
  { value: AdmissionLevelTypeId.YEAR_FOUR, title: "Year 4" },
  { value: AdmissionLevelTypeId.YEAR_FIVE_PLUS, title: "Year 5+" }
]

const yearOfStudyTypesList = [
  { value: YearOfStudyTypeId.YEAR_ONE, title: "1" },
  { value: YearOfStudyTypeId.YEAR_TWO, title: "2" },
  { value: YearOfStudyTypeId.YEAR_THREE, title: "3" },
  { value: YearOfStudyTypeId.YEAR_FOUR, title: "4" },
  { value: YearOfStudyTypeId.YEAR_FIVE_PLUS, title: "5+" }
]

const jobSourceTypesList = [
  { value: JobSourceTypeId.JIJIS, title: "Jijis" },
  { value: JobSourceTypeId.LINKEDIN, title: "LinkedIn" },

  { value: JobSourceTypeId.INDEED, title: "Indeed" },
  { value: JobSourceTypeId.JOBSDB, title: "JobsDb" },
  { value: JobSourceTypeId.COMPANY_WEBSITE, title: "該公司網站" },
  {
    value: JobSourceTypeId.UNIVERSITY,
    title: "大學"
  },
  { value: JobSourceTypeId.FRIENDS, title: "朋友介紹" },
  { value: JobSourceTypeId.OTHER, title: "其他" }
]

const contactMethodTypesList = [
  { value: ContactMethodTypeId.EMAIL, title: "Email" },
  { value: ContactMethodTypeId.SIGNAL, title: "Signal" },
  { value: ContactMethodTypeId.WHATSAPP, title: "Whatsapp" },
  { value: ContactMethodTypeId.TELEGRAM, title: "Telegram" },
  { value: ContactMethodTypeId.OTHER, title: "其他" }
]

const DSEGradeTypesList = [
  { value: DSEGradeTypeId.ONE, title: "1" },
  { value: DSEGradeTypeId.TWO, title: "2" },
  { value: DSEGradeTypeId.THREE, title: "3" },
  { value: DSEGradeTypeId.FOUR, title: "4" },
  { value: DSEGradeTypeId.FIVE, title: "5" },
  { value: DSEGradeTypeId.FIVE_START, title: "5*" },
  { value: DSEGradeTypeId.FIVE_DOUBLE_STAR, title: "5**" },
  { value: DSEGradeTypeId.PASS, title: "合格" },
  { value: DSEGradeTypeId.FAIL, title: "肥𠹌佐嗚嗚嗚（不合格）" },
  { value: DSEGradeTypeId.UNCLASSIFIED, title: "U" }
]

const academicStatusTypesList = [
  { value: AcademicStatusTypeId.YEAR_ONE, title: "Year 1" },
  { value: AcademicStatusTypeId.YEAR_TWO, title: "Year 2" },
  { value: AcademicStatusTypeId.YEAR_THERE, title: "Year 3" },
  { value: AcademicStatusTypeId.YEAR_FOUR, title: "Year 4" },
  { value: AcademicStatusTypeId.YEAR_FIVE_PLUS, title: "Year 5+" },
  { value: AcademicStatusTypeId.POSTGRAD, title: "研究生" },
  { value: AcademicStatusTypeId.ALUMI, title: "校友" },
  { value: AcademicStatusTypeId.OTHER, title: "其他" }
]

const honorTypeIdList = [
  { value: HonorTypeId.FIRST, title: "甲等(First Class Honours)" },
  {
    value: HonorTypeId.SECOND_UP,
    title: "乙等一級(Upper Second Class Honours)"
  },
  {
    value: HonorTypeId.SECOND_LOW,
    title: "乙等二級(Lower Second Class Honours)"
  },
  { value: HonorTypeId.THIRD, title: "丙等(Third Class Honours)" },
  { value: HonorTypeId.SUMMA_CUM_LAUDE, title: "卓越(Summa Cum Laude)" },
  { value: HonorTypeId.MAGNA_CUM_LAUDE, title: "優異(Magna Cum Laude)" },
  { value: HonorTypeId.CUM_LAUDE, title: "優良(Cum Laude)" },
  { value: HonorTypeId.PASS, title: "合格(Pass)" }
]

const schoolSortingTypesList = [
  {
    value: SchoolSortingTypes.POST_DATE_DESCENDING,
    title: "發佈日期-新到舊"
  },
  {
    value: SchoolSortingTypes.POST_DATE_ASCENDING,
    title: "發佈日期-舊到新"
  },
  {
    value: SchoolSortingTypes.ADMISSION_DATE_DESCENDING,
    title: "入學日期-新到舊"
  },
  {
    value: SchoolSortingTypes.ADMISSION_DATE_ASCENDING,
    title: "入學日期-舊到新"
  },

  {
    value: SchoolSortingTypes.RECOMMENDATION_DESCENDING,
    title: "推薦指數-高到低"
  },
  {
    value: SchoolSortingTypes.RECOMMENDATION_ASCENDING,
    title: "推薦指數-低到高"
  },

  {
    value: SchoolSortingTypes.VOTE_DESCENDING,
    title: "評分-高到低"
  },
  {
    value: SchoolSortingTypes.VOTE_ASCENDING,
    title: "評分-低到高"
  }
]

const programmeSortingTypesList = [
  {
    value: ProgrammeSortingTypes.POST_DATE_DESCENDING,
    title: "發佈日期-新到舊"
  },
  {
    value: ProgrammeSortingTypes.POST_DATE_ASCENDING,
    title: "發佈日期-舊到新"
  },
  {
    value: ProgrammeSortingTypes.ADMISSION_DATE_DESCENDING,
    title: "入學日期-新到舊"
  },
  {
    value: ProgrammeSortingTypes.ADMISSION_DATE_ASCENDING,
    title: "入學日期-舊到新"
  },

  {
    value: ProgrammeSortingTypes.RECOMMENDATION_DESCENDING,
    title: "推薦指數-高到低"
  },
  {
    value: ProgrammeSortingTypes.RECOMMENDATION_ASCENDING,
    title: "推薦指數-低到高"
  },
  {
    value: ProgrammeSortingTypes.VOTE_DESCENDING,
    title: "評分-高到低"
  },
  {
    value: ProgrammeSortingTypes.VOTE_ASCENDING,
    title: "評分-低到高"
  }
]

const interviewSortingTypesList = [
  {
    value: InterviewSortingTypes.POST_DATE_DESCENDING,
    title: "發佈日期-新到舊"
  },
  {
    value: InterviewSortingTypes.POST_DATE_ASCENDING,
    title: "發佈日期-舊到新"
  },
  {
    value: InterviewSortingTypes.INTERVIEW_DATE_DESCENDING,
    title: "面試日期-舊到新"
  },
  {
    value: InterviewSortingTypes.INTERVIEW_DATE_ASCENDING,
    title: "面試日期-舊到新"
  },
  {
    value: InterviewSortingTypes.DIFFICULTY_DESCENDING,
    title: "面試難度-高到低"
  },
  {
    value: InterviewSortingTypes.DIFFICULTY_ASCENDING,
    title: "面試難度-低到高"
  },
  {
    value: InterviewSortingTypes.VOTE_DESCENDING,
    title: "評分-高到低"
  },
  {
    value: InterviewSortingTypes.VOTE_ASCENDING,
    title: "評分-低到高"
  },
  {
    value: InterviewSortingTypes.BESTFIVE_DESCENDING,
    title: "Best 5-高到低"
  },
  {
    value: InterviewSortingTypes.BESTFIVE_ASCENDING,
    title: "Best 5-低到高"
  },
  {
    value: InterviewSortingTypes.BESTSIX_DESCENDING,
    title: "Best 6-高到低"
  },
  {
    value: InterviewSortingTypes.BESTSIX_ASCENDING,
    title: "best 6-低到高"
  },
  {
    value: InterviewSortingTypes.GAP_DESCENDING,
    title: "GPA-高到低"
  },
  {
    value: InterviewSortingTypes.GPA_ASCENDING,
    title: "GPA-低到高"
  }
]

const admissionOfferSortingTypesList = [
  {
    value: admissionOfferSortingTypes.POST_DATE_DESCENDING,
    title: "發佈日期-新到舊"
  },
  {
    value: admissionOfferSortingTypes.POST_DATE_ASCENDING,
    title: "發佈日期-舊到新"
  },
  {
    value: admissionOfferSortingTypes.OFFER_RECEIVED_DATE_DESCENDING,
    title: "收Offer日期-舊到新"
  },
  {
    value: admissionOfferSortingTypes.OFFER_RECEIVED_DATE_ASCENDING,
    title: "收Offer日期-舊到新"
  },
  {
    value: admissionOfferSortingTypes.VOTE_DESCENDING,
    title: "評分-高到低"
  },
  {
    value: admissionOfferSortingTypes.VOTE_ASCENDING,
    title: "評分-低到高"
  },
  {
    value: admissionOfferSortingTypes.BESTFIVE_DESCENDING,
    title: "Best 5-高到低"
  },
  {
    value: admissionOfferSortingTypes.BESTFIVE_ASCENDING,
    title: "Best 5-低到高"
  },
  {
    value: admissionOfferSortingTypes.BESTSIX_DESCENDING,
    title: "Best 6-高到低"
  },
  {
    value: admissionOfferSortingTypes.BESTSIX_ASCENDING,
    title: "best 6-低到高"
  },
  {
    value: admissionOfferSortingTypes.GAP_DESCENDING,
    title: "GPA-高到低"
  },
  {
    value: admissionOfferSortingTypes.GPA_ASCENDING,
    title: "GPA-低到高"
  }
]

const internshipOfferSortingTypesList = [
  {
    value: InternshipOfferSortingTypes.POST_DATE_DESCENDING,
    title: "發佈日期-新到舊"
  },
  {
    value: InternshipOfferSortingTypes.POST_DATE_ASCENDING,
    title: "發佈日期-舊到新"
  },
  {
    value: InternshipOfferSortingTypes.OFFER_RECEIVED_DATE_DESCENDING,
    title: "收Offer日期-舊到新"
  },
  {
    value: InternshipOfferSortingTypes.OFFER_RECEIVED_DATE_ASCENDING,
    title: "收Offer日期-舊到新"
  },
  {
    value: InternshipOfferSortingTypes.VOTE_DESCENDING,
    title: "評分-高到低"
  },
  {
    value: InternshipOfferSortingTypes.VOTE_ASCENDING,
    title: "評分-低到高"
  },
  {
    value: InternshipOfferSortingTypes.DIFFICULTY_DESCENDING,
    title: "搵工難度-高到低"
  },
  {
    value: InternshipOfferSortingTypes.DIFFICULTY_ASCENDING,
    title: "搵工難度-低到高"
  },
  {
    value: InternshipOfferSortingTypes.SALARY_DESCENDING,
    title: "年薪-高到低"
  },
  {
    value: InternshipOfferSortingTypes.SALARY_ASCENDING,
    title: "年薪-低到高"
  }
]

const gradJobOfferSortingTypesList = [
  {
    value: gradJobOfferSortingTypes.POST_DATE_DESCENDING,
    title: "發佈日期-新到舊"
  },
  {
    value: gradJobOfferSortingTypes.POST_DATE_ASCENDING,
    title: "發佈日期-舊到新"
  },
  {
    value: gradJobOfferSortingTypes.OFFER_RECEIVED_DATE_DESCENDING,
    title: "收Offer日期-舊到新"
  },
  {
    value: gradJobOfferSortingTypes.OFFER_RECEIVED_DATE_ASCENDING,
    title: "收Offer日期-舊到新"
  },
  {
    value: gradJobOfferSortingTypes.VOTE_DESCENDING,
    title: "評分-高到低"
  },
  {
    value: gradJobOfferSortingTypes.VOTE_ASCENDING,
    title: "評分-低到高"
  },
  {
    value: gradJobOfferSortingTypes.DIFFICULTY_DESCENDING,
    title: "搵工難度-高到低"
  },
  {
    value: gradJobOfferSortingTypes.DIFFICULTY_ASCENDING,
    title: "搵工難度-低到高"
  },
  {
    value: gradJobOfferSortingTypes.HOPE_DESCENDING,
    title: "前途評估-高到低"
  },
  {
    value: gradJobOfferSortingTypes.HOPE_ASCENDING,
    title: "前途評估-低到高"
  },
  {
    value: gradJobOfferSortingTypes.SALARY_DESCENDING,
    title: "月薪-高到低"
  },
  {
    value: gradJobOfferSortingTypes.SALARY_ASCENDING,
    title: "月薪-低到高"
  }
]

export {
  // dressCodeOptions,
  // jobSourceOptions,
  // internTypeOptions,
  schoolTypesList,
  dressCodeTypesList,
  applicationTypesList,
  DSEJupasChoicePriorityTypesList,
  admissionOfferTypesList,
  internshipTypesList,
  admissionLevelTypesList,
  yearOfStudyTypesList,
  jobSourceTypesList,
  contactMethodTypesList,
  DSEGradeTypesList,
  academicStatusTypesList,
  honorTypeIdList,
  schoolSortingTypesList,
  programmeSortingTypesList,
  interviewSortingTypesList,
  admissionOfferSortingTypesList,
  internshipOfferSortingTypesList,
  gradJobOfferSortingTypesList,
  SITENAME,
  currentSchoolTypesList
}
