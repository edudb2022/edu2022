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

const jobTypeList = [
  {
    id: 100,
    guiOrder: 0,
    chineseDisplayText: "建築",
    englishDisplayText: "Architecture",
    JobCategoryId: 1
  },
  {
    id: 200,
    guiOrder: 1,
    chineseDisplayText: "動畫",
    englishDisplayText: "Animation",
    JobCategoryId: 2
  },
  {
    id: 201,
    guiOrder: 2,
    chineseDisplayText: "藝術",
    englishDisplayText: "Art",
    JobCategoryId: 2
  },
  {
    id: 202,
    guiOrder: 3,
    chineseDisplayText: "漫畫",
    englishDisplayText: "Comics",
    JobCategoryId: 2
  },
  {
    id: 203,
    guiOrder: 4,
    chineseDisplayText: "內容創作者",
    englishDisplayText: "Content Creator",
    JobCategoryId: 2
  },
  {
    id: 204,
    guiOrder: 5,
    chineseDisplayText: "娛樂",
    englishDisplayText: "Entertainment",
    JobCategoryId: 2
  },
  {
    id: 205,
    guiOrder: 6,
    chineseDisplayText: "音樂",
    englishDisplayText: "Music",
    JobCategoryId: 2
  },
  {
    id: 206,
    guiOrder: 7,
    chineseDisplayText: "表演者",
    englishDisplayText: "Performer",
    JobCategoryId: 2
  },
  {
    id: 207,
    guiOrder: 8,
    chineseDisplayText: "寫作及編輯",
    englishDisplayText: "Writing And Editing",
    JobCategoryId: 2
  },
  {
    id: 299,
    guiOrder: 9,
    chineseDisplayText: "藝術與創作 (其他)",
    englishDisplayText: "Arts And Creation (Other)",
    JobCategoryId: 2
  },
  {
    id: 300,
    guiOrder: 10,
    chineseDisplayText: "客戶服務",
    englishDisplayText: "Customer Service",
    JobCategoryId: 3
  },
  {
    id: 400,
    guiOrder: 11,
    chineseDisplayText: "時裝設計",
    englishDisplayText: "Fashion Design",
    JobCategoryId: 4
  },
  {
    id: 401,
    guiOrder: 12,
    chineseDisplayText: "平面設計",
    englishDisplayText: "Graphics Design",
    JobCategoryId: 4
  },
  {
    id: 402,
    guiOrder: 13,
    chineseDisplayText: "室內設計",
    englishDisplayText: "Interior Design",
    JobCategoryId: 4
  },
  {
    id: 403,
    guiOrder: 14,
    chineseDisplayText: "產品設計",
    englishDisplayText: "Product Design",
    JobCategoryId: 4
  },
  {
    id: 404,
    guiOrder: 15,
    chineseDisplayText: "UXUI設計",
    englishDisplayText: "Uxui Design",
    JobCategoryId: 4
  },
  {
    id: 499,
    guiOrder: 16,
    chineseDisplayText: "設計（其他)",
    englishDisplayText: "Design (Other)",
    JobCategoryId: 4
  },
  {
    id: 500,
    guiOrder: 17,
    chineseDisplayText: "幼兒園老師",
    englishDisplayText: "Kindergarten Teacher",
    JobCategoryId: 5
  },
  {
    id: 501,
    guiOrder: 18,
    chineseDisplayText: "講師或教授",
    englishDisplayText: "Lecturer Or Professor",
    JobCategoryId: 5
  },
  {
    id: 502,
    guiOrder: 19,
    chineseDisplayText: "小學教師",
    englishDisplayText: "Primary School Teacher",
    JobCategoryId: 5
  },
  {
    id: 503,
    guiOrder: 20,
    chineseDisplayText: "中學教師",
    englishDisplayText: "Secondary School Teacher",
    JobCategoryId: 5
  },
  {
    id: 504,
    guiOrder: 21,
    chineseDisplayText: "導師",
    englishDisplayText: "Tutor",
    JobCategoryId: 5
  },
  {
    id: 599,
    guiOrder: 22,
    chineseDisplayText: "教育（其他)",
    englishDisplayText: "Education (Other)",
    JobCategoryId: 5
  },
  {
    id: 600,
    guiOrder: 23,
    chineseDisplayText: "屋宇裝備工程",
    englishDisplayText: "Building Services Engineering",
    JobCategoryId: 6
  },
  {
    id: 601,
    guiOrder: 24,
    chineseDisplayText: "土木與結構工程",
    englishDisplayText: "Civil And Structural Engineering",
    JobCategoryId: 6
  },
  {
    id: 602,
    guiOrder: 25,
    chineseDisplayText: "化學工程",
    englishDisplayText: "Chemical Engineering",
    JobCategoryId: 6
  },
  {
    id: 603,
    guiOrder: 26,
    chineseDisplayText: "繪圖員",
    englishDisplayText: "Draftsman",
    JobCategoryId: 6
  },
  {
    id: 604,
    guiOrder: 27,
    chineseDisplayText: "機電工程",
    englishDisplayText: "Electrical Engineering",
    JobCategoryId: 6
  },
  {
    id: 605,
    guiOrder: 28,
    chineseDisplayText: "電子工程",
    englishDisplayText: "Electronic Engineering",
    JobCategoryId: 6
  },
  {
    id: 606,
    guiOrder: 29,
    chineseDisplayText: "機械工業",
    englishDisplayText: "Mechanical Engineering",
    JobCategoryId: 6
  },
  {
    id: 607,
    guiOrder: 30,
    chineseDisplayText: "網路工程",
    englishDisplayText: "Network Engineering",
    JobCategoryId: 6
  },
  {
    id: 608,
    guiOrder: 31,
    chineseDisplayText: "半導體工程",
    englishDisplayText: "Semiconductor Engineering",
    JobCategoryId: 6
  },
  {
    id: 609,
    guiOrder: 32,
    chineseDisplayText: "測量",
    englishDisplayText: "Surveying",
    JobCategoryId: 6
  },
  {
    id: 699,
    guiOrder: 33,
    chineseDisplayText: "工程（其他)",
    englishDisplayText: "Engineering (Other)",
    JobCategoryId: 6
  },
  {
    id: 700,
    guiOrder: 34,
    chineseDisplayText: "保育",
    englishDisplayText: "Conservation",
    JobCategoryId: 7
  },
  {
    id: 701,
    guiOrder: 35,
    chineseDisplayText: "回收",
    englishDisplayText: "Recycling",
    JobCategoryId: 7
  },
  {
    id: 799,
    guiOrder: 36,
    chineseDisplayText: "環境（其他)",
    englishDisplayText: "Environment (Other)",
    JobCategoryId: 7
  },
  {
    id: 800,
    guiOrder: 37,
    chineseDisplayText: "導演",
    englishDisplayText: "Director",
    JobCategoryId: 8
  },
  {
    id: 801,
    guiOrder: 38,
    chineseDisplayText: "電影製作",
    englishDisplayText: "Film Production",
    JobCategoryId: 8
  },
  {
    id: 802,
    guiOrder: 39,
    chineseDisplayText: "燈光師",
    englishDisplayText: "Lighting Technician",
    JobCategoryId: 8
  },
  {
    id: 803,
    guiOrder: 40,
    chineseDisplayText: "音效師",
    englishDisplayText: "Sound Technician",
    JobCategoryId: 8
  },
  {
    id: 899,
    guiOrder: 41,
    chineseDisplayText: "電影 (其他)",
    englishDisplayText: "Film (Other)",
    JobCategoryId: 8
  },
  {
    id: 900,
    guiOrder: 42,
    chineseDisplayText: "會計",
    englishDisplayText: "Accounting",
    JobCategoryId: 9
  },
  {
    id: 901,
    guiOrder: 43,
    chineseDisplayText: "審計",
    englishDisplayText: "Audit",
    JobCategoryId: 9
  },
  {
    id: 902,
    guiOrder: 44,
    chineseDisplayText: "銀行",
    englishDisplayText: "Banking",
    JobCategoryId: 9
  },
  {
    id: 903,
    guiOrder: 45,
    chineseDisplayText: "業務分析師",
    englishDisplayText: "Business Analyst",
    JobCategoryId: 9
  },
  {
    id: 904,
    guiOrder: 46,
    chineseDisplayText: "金融",
    englishDisplayText: "Finance",
    JobCategoryId: 9
  },
  {
    id: 999,
    guiOrder: 47,
    chineseDisplayText: "金融（其他)",
    englishDisplayText: "finance (Other)",
    JobCategoryId: 9
  },
  {
    id: 1000,
    guiOrder: 48,
    chineseDisplayText: "中菜",
    englishDisplayText: "Chinese Cuisine",
    JobCategoryId: 10
  },
  {
    id: 1001,
    guiOrder: 49,
    chineseDisplayText: "西菜",
    englishDisplayText: "Western Cuisine",
    JobCategoryId: 10
  },
  {
    id: 1099,
    guiOrder: 50,
    chineseDisplayText: "飲食(其他)",
    englishDisplayText: "Food And Beverages (Other)",
    JobCategoryId: 10
  },
  {
    id: 1100,
    guiOrder: 51,
    chineseDisplayText: "美容化妝品",
    englishDisplayText: "Beauty Cosmetics",
    JobCategoryId: 11
  },
  {
    id: 1101,
    guiOrder: 52,
    chineseDisplayText: "健康保健",
    englishDisplayText: "Health Care",
    JobCategoryId: 11
  },
  {
    id: 1102,
    guiOrder: 53,
    chineseDisplayText: "運動",
    englishDisplayText: "Sport",
    JobCategoryId: 11
  },
  {
    id: 1199,
    guiOrder: 54,
    chineseDisplayText: "健康（其他)",
    englishDisplayText: "Health (Other)",
    JobCategoryId: 11
  },
  {
    id: 1200,
    guiOrder: 55,
    chineseDisplayText: "員工和招聘",
    englishDisplayText: "Staffing And Recruiting",
    JobCategoryId: 12
  },
  {
    id: 1201,
    guiOrder: 56,
    chineseDisplayText: "求職顧問",
    englishDisplayText: "Recruitment Consultant",
    JobCategoryId: 12
  },
  {
    id: 1299,
    guiOrder: 57,
    chineseDisplayText: "人力資源（其他)",
    englishDisplayText: "Human Resource (Other)",
    JobCategoryId: 12
  },
  {
    id: 1300,
    guiOrder: 58,
    chineseDisplayText: "保險",
    englishDisplayText: "Insurance",
    JobCategoryId: 13
  },
  {
    id: 1400,
    guiOrder: 59,
    chineseDisplayText: "大律師",
    englishDisplayText: "Barrister",
    JobCategoryId: 14
  },
  {
    id: 1401,
    guiOrder: 60,
    chineseDisplayText: "法律實習生",
    englishDisplayText: "Legal Trainee",
    JobCategoryId: 14
  },
  {
    id: 1402,
    guiOrder: 61,
    chineseDisplayText: "法律顧問",
    englishDisplayText: "Legal Consultant",
    JobCategoryId: 14
  },
  {
    id: 1403,
    guiOrder: 62,
    chineseDisplayText: "事務律師",
    englishDisplayText: "Solicitor",
    JobCategoryId: 14
  },
  {
    id: 1499,
    guiOrder: 63,
    chineseDisplayText: "法律服務（其他)",
    englishDisplayText: "Legal Services (Other)",
    JobCategoryId: 14
  },
  {
    id: 1500,
    guiOrder: 64,
    chineseDisplayText: "運輸和物流",
    englishDisplayText: "Transportation And Logistic",
    JobCategoryId: 15
  },
  {
    id: 1600,
    guiOrder: 65,
    chineseDisplayText: "奢侈品和珠寶",
    englishDisplayText: "Luxury Goods And Jewelry",
    JobCategoryId: 16
  },
  {
    id: 1700,
    guiOrder: 66,
    chineseDisplayText: "項目經理",
    englishDisplayText: "Project Manager",
    JobCategoryId: 17
  },
  {
    id: 1701,
    guiOrder: 67,
    chineseDisplayText: "產品經理",
    englishDisplayText: "Product Manager",
    JobCategoryId: 17
  },
  {
    id: 1702,
    guiOrder: 68,
    chineseDisplayText: "管理培訓生",
    englishDisplayText: "Management Trainee",
    JobCategoryId: 17
  },
  {
    id: 1799,
    guiOrder: 69,
    chineseDisplayText: "管理（其他)",
    englishDisplayText: "Management (other)",
    JobCategoryId: 17
  },
  {
    id: 1800,
    guiOrder: 70,
    chineseDisplayText: "製造業",
    englishDisplayText: "Manufacturing",
    JobCategoryId: 18
  },
  {
    id: 1900,
    guiOrder: 71,
    chineseDisplayText: "廣告",
    englishDisplayText: "Advertising",
    JobCategoryId: 19
  },
  {
    id: 1901,
    guiOrder: 72,
    chineseDisplayText: "數位市場推廣策劃",
    englishDisplayText: "Digital Marketing",
    JobCategoryId: 19
  },
  {
    id: 1902,
    guiOrder: 73,
    chineseDisplayText: "市場推廣策劃",
    englishDisplayText: "Marketing",
    JobCategoryId: 19
  },
  {
    id: 1999,
    guiOrder: 74,
    chineseDisplayText: "市場推廣策劃 (其他)",
    englishDisplayText: "Marketing (Other)",
    JobCategoryId: 19
  },
  {
    id: 2000,
    guiOrder: 75,
    chineseDisplayText: "廣播",
    englishDisplayText: "Broadcasting",
    JobCategoryId: 20
  },
  {
    id: 2001,
    guiOrder: 76,
    chineseDisplayText: "媒體製作",
    englishDisplayText: "Media Production",
    JobCategoryId: 20
  },
  {
    id: 2002,
    guiOrder: 77,
    chineseDisplayText: "多媒體",
    englishDisplayText: "Multi Media",
    JobCategoryId: 20
  },
  {
    id: 2003,
    guiOrder: 78,
    chineseDisplayText: "編輯和新聞",
    englishDisplayText: "Editor And Journalism",
    JobCategoryId: 20
  },
  {
    id: 2099,
    guiOrder: 79,
    chineseDisplayText: "媒體（其他)",
    englishDisplayText: "Media (Other)",
    JobCategoryId: 20
  },
  {
    id: 2100,
    guiOrder: 80,
    chineseDisplayText: "牙科服務",
    englishDisplayText: "Dental Service",
    JobCategoryId: 21
  },
  {
    id: 2101,
    guiOrder: 81,
    chineseDisplayText: "醫生",
    englishDisplayText: "Doctor",
    JobCategoryId: 21
  },
  {
    id: 2102,
    guiOrder: 82,
    chineseDisplayText: "音樂治療師",
    englishDisplayText: "Music Therapist",
    JobCategoryId: 21
  },
  {
    id: 2103,
    guiOrder: 83,
    chineseDisplayText: "護士",
    englishDisplayText: "Nurse",
    JobCategoryId: 21
  },
  {
    id: 2104,
    guiOrder: 84,
    chineseDisplayText: "護理",
    englishDisplayText: "Nursing",
    JobCategoryId: 21
  },
  {
    id: 2105,
    guiOrder: 85,
    chineseDisplayText: "職業治療師",
    englishDisplayText: "Occupational Therapist",
    JobCategoryId: 21
  },
  {
    id: 2106,
    guiOrder: 86,
    chineseDisplayText: "藥劑",
    englishDisplayText: "Pharmacy",
    JobCategoryId: 21
  },
  {
    id: 2107,
    guiOrder: 87,
    chineseDisplayText: "心理諮詢",
    englishDisplayText: "Psychological Counselling",
    JobCategoryId: 21
  },
  {
    id: 2108,
    guiOrder: 88,
    chineseDisplayText: "物理治療師",
    englishDisplayText: "Physical Therapist",
    JobCategoryId: 21
  },
  {
    id: 2109,
    guiOrder: 89,
    chineseDisplayText: "語言治療師",
    englishDisplayText: "Speech Therapist",
    JobCategoryId: 21
  },
  {
    id: 2110,
    guiOrder: 90,
    chineseDisplayText: "治療師",
    englishDisplayText: "Therapist",
    JobCategoryId: 21
  },
  {
    id: 2111,
    guiOrder: 91,
    chineseDisplayText: "獸醫",
    englishDisplayText: "Veterinary",
    JobCategoryId: 21
  },
  {
    id: 2199,
    guiOrder: 92,
    chineseDisplayText: "醫療服務（其他)",
    englishDisplayText: "Medical Services (Other)",
    JobCategoryId: 21
  },
  {
    id: 2200,
    guiOrder: 93,
    chineseDisplayText: "農業",
    englishDisplayText: "Agriculture",
    JobCategoryId: 22
  },
  {
    id: 2201,
    guiOrder: 94,
    chineseDisplayText: "漁業",
    englishDisplayText: "Fishery",
    JobCategoryId: 22
  },
  {
    id: 2299,
    guiOrder: 95,
    chineseDisplayText: "初級產業（其他)",
    englishDisplayText: "Primary Industry (Other)",
    JobCategoryId: 22
  },
  {
    id: 2300,
    guiOrder: 96,
    chineseDisplayText: "房地產",
    englishDisplayText: "Real Estate",
    JobCategoryId: 23
  },
  {
    id: 2301,
    guiOrder: 97,
    chineseDisplayText: "物業管理",
    englishDisplayText: "Property Management",
    JobCategoryId: 23
  },
  {
    id: 2399,
    guiOrder: 98,
    chineseDisplayText: "房地產（其他)",
    englishDisplayText: "Property (Other)",
    JobCategoryId: 23
  },
  {
    id: 2400,
    guiOrder: 99,
    chineseDisplayText: "銷售",
    englishDisplayText: "Merchandising",
    JobCategoryId: 24
  },
  {
    id: 2401,
    guiOrder: 100,
    chineseDisplayText: "採購",
    englishDisplayText: "Purchasing",
    JobCategoryId: 24
  },
  {
    id: 2499,
    guiOrder: 101,
    chineseDisplayText: "零售（其他)",
    englishDisplayText: "Retail (Other)",
    JobCategoryId: 24
  },
  {
    id: 2500,
    guiOrder: 102,
    chineseDisplayText: "能源",
    englishDisplayText: "Energy",
    JobCategoryId: 25
  },
  {
    id: 2501,
    guiOrder: 103,
    chineseDisplayText: "營養師",
    englishDisplayText: "Dietitian",
    JobCategoryId: 25
  },
  {
    id: 2502,
    guiOrder: 104,
    chineseDisplayText: "食品營養學家",
    englishDisplayText: "Food Nutritionist",
    JobCategoryId: 25
  },
  {
    id: 2503,
    guiOrder: 105,
    chineseDisplayText: "食物科學",
    englishDisplayText: "Food Science",
    JobCategoryId: 25
  },
  {
    id: 2504,
    guiOrder: 106,
    chineseDisplayText: "實驗室",
    englishDisplayText: "Laboratory",
    JobCategoryId: 25
  },
  {
    id: 2505,
    guiOrder: 107,
    chineseDisplayText: "研究與開發",
    englishDisplayText: "Research and development",
    JobCategoryId: 25
  },
  {
    id: 2599,
    guiOrder: 108,
    chineseDisplayText: "科學（其他)",
    englishDisplayText: "Science (Other)",
    JobCategoryId: 25
  },
  {
    id: 2600,
    guiOrder: 109,
    chineseDisplayText: "社會工作者",
    englishDisplayText: "Social Worker",
    JobCategoryId: 26
  },
  {
    id: 2699,
    guiOrder: 110,
    chineseDisplayText: "社會服務（其他）",
    englishDisplayText: "Social Service (Other)",
    JobCategoryId: 26
  },
  {
    id: 2700,
    guiOrder: 111,
    chineseDisplayText: "紡織品",
    englishDisplayText: "Textiles",
    JobCategoryId: 27
  },
  {
    id: 2800,
    guiOrder: 112,
    chineseDisplayText: "AI和機器學習工程師",
    englishDisplayText: "AI And Machine Learning Engineer",
    JobCategoryId: 28
  },
  {
    id: 2801,
    guiOrder: 113,
    chineseDisplayText: "後端軟件工程師",
    englishDisplayText: "Backend Software Engineer",
    JobCategoryId: 28
  },
  {
    id: 2802,
    guiOrder: 114,
    chineseDisplayText: "網絡安全",
    englishDisplayText: "Cyber Security",
    JobCategoryId: 28
  },
  {
    id: 2803,
    guiOrder: 115,
    chineseDisplayText: "前端軟件工程師",
    englishDisplayText: "Frontend Software Engineer",
    JobCategoryId: 28
  },
  {
    id: 2804,
    guiOrder: 116,
    chineseDisplayText: "DevOps",
    englishDisplayText: "DevOps",
    JobCategoryId: 28
  },
  {
    id: 2805,
    guiOrder: 117,
    chineseDisplayText: "數據分析師",
    englishDisplayText: "Data Analyst",
    JobCategoryId: 28
  },
  {
    id: 2806,
    guiOrder: 118,
    chineseDisplayText: "數據科學家",
    englishDisplayText: "Data Scientist",
    JobCategoryId: 28
  },
  {
    id: 2807,
    guiOrder: 119,
    chineseDisplayText: "遊戲開發",
    englishDisplayText: "Game Developer",
    JobCategoryId: 28
  },
  {
    id: 2808,
    guiOrder: 120,
    chineseDisplayText: "手機軟件工程師",
    englishDisplayText: "Mobile Software Engineer",
    JobCategoryId: 28
  },
  {
    id: 2809,
    guiOrder: 121,
    chineseDisplayText: "系統工程師",
    englishDisplayText: "Infrastructure Engineer",
    JobCategoryId: 28
  },
  {
    id: 2810,
    guiOrder: 122,
    chineseDisplayText: "物聯網工程師",
    englishDisplayText: "Iot Engineer",
    JobCategoryId: 28
  },
  {
    id: 2811,
    guiOrder: 123,
    chineseDisplayText: "IT Support",
    englishDisplayText: "IT Support",
    JobCategoryId: 28
  },
  {
    id: 2812,
    guiOrder: 124,
    chineseDisplayText: "QA工程師",
    englishDisplayText: "QA Engineer",
    JobCategoryId: 28
  },
  {
    id: 2813,
    guiOrder: 125,
    chineseDisplayText: "機器人工程師",
    englishDisplayText: "Robotic Engineer",
    JobCategoryId: 28
  },
  {
    id: 2814,
    guiOrder: 126,
    chineseDisplayText: "軟件工程師",
    englishDisplayText: "Software Engineer",
    JobCategoryId: 28
  },
  {
    id: 2899,
    guiOrder: 127,
    chineseDisplayText: "科技 (其他)",
    englishDisplayText: "Technology Other",
    JobCategoryId: 28
  },
  {
    id: 2900,
    guiOrder: 128,
    chineseDisplayText: "旅遊",
    englishDisplayText: "Travel",
    JobCategoryId: 29
  },
  {
    id: 2901,
    guiOrder: 129,
    chineseDisplayText: "酒店服務",
    englishDisplayText: "Hotel Service",
    JobCategoryId: 29
  },
  {
    id: 2999,
    guiOrder: 130,
    chineseDisplayText: "旅遊業（其他)",
    englishDisplayText: "Tourism (Other)",
    JobCategoryId: 29
  },
  {
    id: 3000,
    guiOrder: 131,
    chineseDisplayText: "翻譯",
    englishDisplayText: "Translation",
    JobCategoryId: 30
  },
  {
    id: 3100,
    guiOrder: 132,
    chineseDisplayText: "自由工作者",
    englishDisplayText: "Freelancer",
    JobCategoryId: 31
  },
  {
    id: 3101,
    guiOrder: 133,
    chineseDisplayText: "Slasher",
    englishDisplayText: "Slasher",
    JobCategoryId: 31
  },
  {
    id: 3102,
    guiOrder: 134,
    chineseDisplayText: "公務員",
    englishDisplayText: "Civil Servant",
    JobCategoryId: 31
  },
  {
    id: 3103,
    guiOrder: 135,
    chineseDisplayText: "KOL",
    englishDisplayText: "KOL",
    JobCategoryId: 31
  },
  {
    id: 99999,
    guiOrder: 136,
    chineseDisplayText: "其他",
    englishDisplayText: "Other",
    JobCategoryId: 999
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
  currentSchoolTypesList,
  jobTypeList
}
