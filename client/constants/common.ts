import {
  AcademicStatusTypesId,
  AdmissionLevelTypesId,
  admissionOfferSortingTypes,
  AdmissionOfferTypeId,
  ApplicationTypeId,
  ContactMethodTypeId,
  DressCodeTypeId,
  DSEGradeTypesId,
  DSEJupasChoicePriorityTypesId,
  gradJobOfferSortingTypes,
  HonorTypesId,
  InternshipOfferSortingTypes,
  InternshipTypesId,
  InterviewSortingTypes,
  JobSourceTypesId,
  ProgrammeSortingTypes,
  SchoolSortingTypes,
  SchoolTypeId,
  YearOfStudyTypeslId
} from "../types/common"

const dressCodeOptions = [
  { value: "", title: "Please Select" },
  { value: "formal", title: "formal" },
  { value: "smartCasual", title: "Smart Casual" },
  { value: "casual", title: "Casual" },
  { value: "upToYou", title: "Up to You" }
]

const jobSourceOptions = [
  { value: "", title: "Please Select" },
  { value: "jijis", title: "Jijis" },
  { value: "universityCareerCentre", title: "University Career Centre" },
  { value: "linkedIn", title: "LinkedIn" },
  { value: "jobsDb", title: "JobsDb" },
  { value: "indeed", title: "Indeed" },
  { value: "CompanyWebsite", title: "CompanyWebsite" },
  { value: "Friends", title: "frends recommendation" },
  { value: "others", title: "others " }
]

const internTypeOptions = [
  { value: "", title: "Please Select" },
  { value: "summer", title: "summer" },
  { value: "winter", title: "winter" },
  { value: "placement", title: "placement" }
]

const schoolTypesList = [
  { value: SchoolTypeId.UNIVERSITY, title: "大學" },
  { value: SchoolTypeId.COLLEGE, title: "大專" }
]

const applicationTypesList = [
  { value: ApplicationTypeId.JUPAS, title: "Jupas" },
  { value: ApplicationTypeId.NON_JUPAS, title: "Non-Jupas" },
  { value: ApplicationTypeId.BACHELOR, title: "Bachelor" }
]

const dressCodeTypesList = [
  { value: DressCodeTypeId.FORMAL, title: "Formal" },
  { value: DressCodeTypeId.SMART_CASUAL, title: "Smart caual" },
  { value: DressCodeTypeId.CASUAL, title: "Casual" },
  { value: DressCodeTypeId.FREE, title: "是但" }
]

const DSEJupasChoicePriorityTypesList = [
  { value: DSEJupasChoicePriorityTypesId.BAND_A_ONE, title: "A1" },
  { value: DSEJupasChoicePriorityTypesId.BAND_A_TWO, title: "A2" },
  { value: DSEJupasChoicePriorityTypesId.BAND_A_THREE, title: "A3" },
  { value: DSEJupasChoicePriorityTypesId.BAND_B, title: "B" },
  { value: DSEJupasChoicePriorityTypesId.BAND_C, title: "C" },
  { value: DSEJupasChoicePriorityTypesId.OTHER, title: "其他" }
]

const admissionOfferTypesList = [
  { value: AdmissionOfferTypeId.DIRECT, title: "Direct" },
  { value: AdmissionOfferTypeId.CONDITIONAL, title: "Conditional" }
]
const internshipTypesList = [
  { value: InternshipTypesId.SUMMER, title: "Summer" },
  { value: InternshipTypesId.WINTER, title: "Winter" },
  { value: InternshipTypesId.PLACEMENT, title: "Placement" }
]

const admissionLevelTypesList = [
  { value: AdmissionLevelTypesId.YEAR_ONE, title: "Year 1" },
  { value: AdmissionLevelTypesId.YEAR_TWO, title: "Year 2" },
  { value: AdmissionLevelTypesId.YEAR_THREE, title: "Year 3" },
  { value: AdmissionLevelTypesId.YEAR_FOUR, title: "Year 4" },
  { value: AdmissionLevelTypesId.YEAR_FIVE_PLUS, title: "Year 5+" }
]

const yearOfStudyTypesList = [
  { value: YearOfStudyTypeslId.YEAR_ONE, title: "1" },
  { value: YearOfStudyTypeslId.YEAR_TWO, title: "2" },
  { value: YearOfStudyTypeslId.YEAR_THREE, title: "3" },
  { value: YearOfStudyTypeslId.YEAR_FOUR, title: "4" },
  { value: YearOfStudyTypeslId.YEAR_FIVE_PLUS, title: "5+" }
]

const jobSourceTypesList = [
  { value: JobSourceTypesId.JIJIS, title: "Jijis" },
  { value: JobSourceTypesId.LINKEDIN, title: "LinkedIn" },

  { value: JobSourceTypesId.INDEED, title: "Indeed" },
  { value: JobSourceTypesId.JOBSDB, title: "JobsDb" },
  { value: JobSourceTypesId.COMPANY_WEBSITE, title: "該公司網站" },
  {
    value: JobSourceTypesId.UNIVERSITY,
    title: "大學"
  },
  { value: JobSourceTypesId.FRIENDS, title: "朋友介紹" },
  { value: JobSourceTypesId.OTHER, title: "其他" }
]

const contactMethodTypesList = [
  { value: ContactMethodTypeId.EMAIL, title: "Email" },
  { value: ContactMethodTypeId.SIGNAL, title: "Signal" },
  { value: ContactMethodTypeId.WHATSAPP, title: "Whatsapp" },
  { value: ContactMethodTypeId.TELEGRAM, title: "Telegram" },
  { value: ContactMethodTypeId.OTHER, title: "其他" }
]

const DSEGradeTypesList = [
  { value: DSEGradeTypesId.ONE, title: "1" },
  { value: DSEGradeTypesId.TWO, title: "2" },
  { value: DSEGradeTypesId.THREE, title: "3" },
  { value: DSEGradeTypesId.FOUR, title: "4" },
  { value: DSEGradeTypesId.FIVE, title: "5" },
  { value: DSEGradeTypesId.FIVE_START, title: "5*" },
  { value: DSEGradeTypesId.FIVE_DOUBLE_STAR, title: "5**" },
  { value: DSEGradeTypesId.PASS, title: "合格" },
  { value: DSEGradeTypesId.FAIL, title: "肥𠹌佐嗚嗚嗚（不合格）" },
  { value: DSEGradeTypesId.UNCLASSIFIED, title: "U" }
]

const academicStatusTypesList = [
  { value: AcademicStatusTypesId.YEAR_ONE, title: "Year 1" },
  { value: AcademicStatusTypesId.YEAR_TWO, title: "Year 2" },
  { value: AcademicStatusTypesId.YEAR_THERE, title: "Year 3" },
  { value: AcademicStatusTypesId.YEAR_FOUR, title: "Year 4" },
  { value: AcademicStatusTypesId.YEAR_FIVE_PLUS, title: "Year 5+" },
  { value: AcademicStatusTypesId.POSTGRAD, title: "PostGrad" },
  { value: AcademicStatusTypesId.ALUMI, title: "校友" },
  { value: AcademicStatusTypesId.OTHER, title: "其他" }
]

const honorTypesIdList = [
  { value: HonorTypesId.FIRST, title: "甲等（First Class Honours）" },
  {
    value: HonorTypesId.SECOND_UP,
    title: "乙等一級（Upper Second Class Honours）"
  },
  {
    value: HonorTypesId.SECOND_LOW,
    title: "乙等二級（Lower Second Class Honours）"
  },
  { value: HonorTypesId.THIRD, title: "丙等（Third Class Honours）" },
  { value: HonorTypesId.SUMMA_CUM_LAUDE, title: "卓越(Summa Cum Laude)" },
  { value: HonorTypesId.MAGNA_CUM_LAUDE, title: "優異(Magna Cum Laude)" },
  { value: HonorTypesId.CUM_LAUDE, title: "優良(Cum Laude)" },
  { value: HonorTypesId.PASS, title: "合格（Pass）" }
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
    value: SchoolSortingTypes.ADIMSSION_DATE_DESCENDING,
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
    value: ProgrammeSortingTypes.ADIMSSION_DATE_DESCENDING,
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

const intershipOfferSortingTypesList = [
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
  dressCodeOptions,
  jobSourceOptions,
  internTypeOptions,
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
  honorTypesIdList,
  schoolSortingTypesList,
  programmeSortingTypesList,
  interviewSortingTypesList,
  admissionOfferSortingTypesList,
  intershipOfferSortingTypesList,
  gradJobOfferSortingTypesList
}
