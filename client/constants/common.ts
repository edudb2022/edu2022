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
  JobTypeId,
  ProgrammeSortingTypes,
  SchoolSortingTypes,
  SchoolTypeId,
  YearOfStudyTypeId
} from "../types/common"

const SITENAME = "GoodTurtle.fyi"
const WEB_ORIGIN =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : ""
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
  { value: JobSourceTypeId.INTERNAL_REFERRAL, title: "內部推薦" },
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
    id: JobTypeId.ARCHITECTURE,
    guiOrder: 0,
    chineseDisplayText: "建築",
    englishDisplayText: "Architecture",
    JobCategoryId: 1
  },
  {
    id: JobTypeId.ANIMATION,
    guiOrder: 1,
    chineseDisplayText: "動畫",
    englishDisplayText: "Animation",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.ART,
    guiOrder: 2,
    chineseDisplayText: "藝術",
    englishDisplayText: "Art",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.COMICS,
    guiOrder: 3,
    chineseDisplayText: "漫畫",
    englishDisplayText: "Comics",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.CONTENT_CREATOR,
    guiOrder: 4,
    chineseDisplayText: "內容創作者",
    englishDisplayText: "Content Creator",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.ENTERTAINMENT,
    guiOrder: 5,
    chineseDisplayText: "娛樂",
    englishDisplayText: "Entertainment",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.ACCOUNTING,
    guiOrder: 42,
    chineseDisplayText: "會計",
    englishDisplayText: "Accounting",
    JobCategoryId: 9
  },
  {
    id: JobTypeId.AUDIT,
    guiOrder: 43,
    chineseDisplayText: "審計",
    englishDisplayText: "Audit",
    JobCategoryId: 9
  },
  {
    id: JobTypeId.BANKING,
    guiOrder: 44,
    chineseDisplayText: "銀行",
    englishDisplayText: "Banking",
    JobCategoryId: 9
  },
  {
    id: JobTypeId.BUSINESS_ANALYST,
    guiOrder: 45,
    chineseDisplayText: "業務分析師",
    englishDisplayText: "Business Analyst",
    JobCategoryId: 9
  },
  {
    id: JobTypeId.BUSINESS_DEVELOPMENT,
    guiOrder: 45,
    chineseDisplayText: "業務發展",
    englishDisplayText: "Business Development",
    JobCategoryId: 9
  },
  {
    id: JobTypeId.FINANCE,
    guiOrder: 46,
    chineseDisplayText: "金融",
    englishDisplayText: "Finance",
    JobCategoryId: 9
  },

  {
    id: JobTypeId.BUSINESS_OTHER,
    guiOrder: 47,
    chineseDisplayText: "商業（其他）",
    englishDisplayText: "Business (Other)",
    JobCategoryId: 9
  },
  {
    id: JobTypeId.MUSIC,
    guiOrder: 6,
    chineseDisplayText: "音樂",
    englishDisplayText: "Music",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.PERFORMER,
    guiOrder: 7,
    chineseDisplayText: "表演者",
    englishDisplayText: "Performer",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.WRITING_AND_EDITING,
    guiOrder: 8,
    chineseDisplayText: "寫作及編輯",
    englishDisplayText: "Writing And Editing",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.ARTS_AND_CREATION_OTHER,
    guiOrder: 9,
    chineseDisplayText: "藝術與創作 (其他)",
    englishDisplayText: "Arts And Creation (Other)",
    JobCategoryId: 2
  },
  {
    id: JobTypeId.CUSTOMER_SERVICE,
    guiOrder: 10,
    chineseDisplayText: "客戶服務",
    englishDisplayText: "Customer Service",
    JobCategoryId: 3
  },
  {
    id: JobTypeId.SERVICE_INDUSTRY_OTHER,
    guiOrder: 10,
    chineseDisplayText: "服務業 (其他)",
    englishDisplayText: "Service Industry (Other)",
    JobCategoryId: 3
  },
  {
    id: JobTypeId.FASHION_DESIGN,
    guiOrder: 11,
    chineseDisplayText: "時裝設計",
    englishDisplayText: "Fashion Design",
    JobCategoryId: 4
  },
  {
    id: JobTypeId.GRAPHICS_DESIGN,
    guiOrder: 12,
    chineseDisplayText: "平面設計",
    englishDisplayText: "Graphics Design",
    JobCategoryId: 4
  },
  {
    id: JobTypeId.INTERIOR_DESIGN,
    guiOrder: 13,
    chineseDisplayText: "室內設計",
    englishDisplayText: "Interior Design",
    JobCategoryId: 4
  },
  {
    id: JobTypeId.PRODUCT_DESIGN,
    guiOrder: 14,
    chineseDisplayText: "產品設計",
    englishDisplayText: "Product Design",
    JobCategoryId: 4
  },
  {
    id: JobTypeId.UXUI_DESIGN,
    guiOrder: 15,
    chineseDisplayText: "UXUI設計",
    englishDisplayText: "UXUI Design",
    JobCategoryId: 4
  },
  {
    id: JobTypeId.DESIGN_OTHER,
    guiOrder: 16,
    chineseDisplayText: "設計（其他）",
    englishDisplayText: "Design (Other)",
    JobCategoryId: 4
  },
  {
    id: JobTypeId.KINDERGARTEN_TEACHER,
    guiOrder: 17,
    chineseDisplayText: "幼兒園老師",
    englishDisplayText: "Kindergarten Teacher",
    JobCategoryId: 5
  },
  {
    id: JobTypeId.LECTURER_OR_PROFESSOR,
    guiOrder: 18,
    chineseDisplayText: "講師或教授",
    englishDisplayText: "Lecturer Or Professor",
    JobCategoryId: 5
  },
  {
    id: JobTypeId.PRIMARY_SCHOOL_TEACHER,
    guiOrder: 19,
    chineseDisplayText: "小學教師",
    englishDisplayText: "Primary School Teacher",
    JobCategoryId: 5
  },
  {
    id: JobTypeId.SECONDARY_SCHOOL_TEACHER,
    guiOrder: 20,
    chineseDisplayText: "中學教師",
    englishDisplayText: "Secondary School Teacher",
    JobCategoryId: 5
  },
  {
    id: JobTypeId.TUTOR,
    guiOrder: 21,
    chineseDisplayText: "導師",
    englishDisplayText: "Tutor",
    JobCategoryId: 5
  },
  {
    id: JobTypeId.EDUCATION_OTHER,
    guiOrder: 22,
    chineseDisplayText: "教育（其他）",
    englishDisplayText: "Education (Other)",
    JobCategoryId: 5
  },
  {
    id: JobTypeId.BUILDING_SERVICES_ENGINEERING,
    guiOrder: 23,
    chineseDisplayText: "屋宇裝備工程",
    englishDisplayText: "Building Services Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.CIVIL_AND_STRUCTURAL_ENGINEERING,
    guiOrder: 24,
    chineseDisplayText: "土木與結構工程",
    englishDisplayText: "Civil And Structural Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.CHEMICAL_ENGINEERING,
    guiOrder: 25,
    chineseDisplayText: "化學工程",
    englishDisplayText: "Chemical Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.DRAFTSMAN,
    guiOrder: 26,
    chineseDisplayText: "繪圖員",
    englishDisplayText: "Draftsman",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.ELECTRICAL_ENGINEERING,
    guiOrder: 27,
    chineseDisplayText: "機電工程",
    englishDisplayText: "Electrical Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.ELECTRONIC_ENGINEERING,
    guiOrder: 28,
    chineseDisplayText: "電子工程",
    englishDisplayText: "Electronic Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.MECHANICAL_ENGINEERING,
    guiOrder: 29,
    chineseDisplayText: "機械工業",
    englishDisplayText: "Mechanical Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.NETWORK_ENGINEERING,
    guiOrder: 30,
    chineseDisplayText: "網路工程",
    englishDisplayText: "Network Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.SEMICONDUCTOR_ENGINEERING,
    guiOrder: 31,
    chineseDisplayText: "半導體工程",
    englishDisplayText: "Semiconductor Engineering",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.SURVEYING,
    guiOrder: 32,
    chineseDisplayText: "測量",
    englishDisplayText: "Surveying",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.TECHNICIAN,
    guiOrder: 32,
    chineseDisplayText: "技術員 (技工)",
    englishDisplayText: "Technician",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.ENGINEERING_OTHER,
    guiOrder: 33,
    chineseDisplayText: "工程（其他）",
    englishDisplayText: "Engineering (Other)",
    JobCategoryId: 6
  },
  {
    id: JobTypeId.CONSERVATION,
    guiOrder: 34,
    chineseDisplayText: "保育",
    englishDisplayText: "Conservation",
    JobCategoryId: 7
  },
  {
    id: JobTypeId.RECYCLING,
    guiOrder: 35,
    chineseDisplayText: "回收",
    englishDisplayText: "Recycling",
    JobCategoryId: 7
  },
  {
    id: JobTypeId.ENVIRONMENT_OTHER,
    guiOrder: 36,
    chineseDisplayText: "環境（其他）",
    englishDisplayText: "Environment (Other)",
    JobCategoryId: 7
  },
  {
    id: JobTypeId.DIRECTOR,
    guiOrder: 37,
    chineseDisplayText: "導演",
    englishDisplayText: "Director",
    JobCategoryId: 8
  },
  {
    id: JobTypeId.FILM_PRODUCTION,
    guiOrder: 38,
    chineseDisplayText: "電影製作",
    englishDisplayText: "Film Production",
    JobCategoryId: 8
  },
  {
    id: JobTypeId.LIGHTING_TECHNICIAN,
    guiOrder: 39,
    chineseDisplayText: "燈光師",
    englishDisplayText: "Lighting Technician",
    JobCategoryId: 8
  },
  {
    id: JobTypeId.SOUND_TECHNICIAN,
    guiOrder: 40,
    chineseDisplayText: "音效師",
    englishDisplayText: "Sound Technician",
    JobCategoryId: 8
  },
  {
    id: JobTypeId.FILM_OTHER,
    guiOrder: 41,
    chineseDisplayText: "電影（其他）",
    englishDisplayText: "Film (Other)",
    JobCategoryId: 8
  },

  {
    id: JobTypeId.CHEF,
    guiOrder: 48,
    chineseDisplayText: "廚師",
    englishDisplayText: "Chef",
    JobCategoryId: 10
  },
  {
    id: JobTypeId.COFFEE,
    guiOrder: 49,
    chineseDisplayText: "咖啡",
    englishDisplayText: "Coffee",
    JobCategoryId: 10
  },
  {
    id: JobTypeId.DESSERT,
    guiOrder: 48,
    chineseDisplayText: "甜品",
    englishDisplayText: "dessert",
    JobCategoryId: 10
  },
  {
    id: JobTypeId.LIQUOR,
    guiOrder: 49,
    chineseDisplayText: "酒",
    englishDisplayText: "Liquor",
    JobCategoryId: 10
  },
  {
    id: JobTypeId.FOOD_AND_BEVERAGES_OTHER,
    guiOrder: 50,
    chineseDisplayText: "飲食(其他)",
    englishDisplayText: "Food And Beverages (Other)",
    JobCategoryId: 10
  },
  {
    id: JobTypeId.BEAUTY_COSMETICS,
    guiOrder: 51,
    chineseDisplayText: "美容化妝品",
    englishDisplayText: "Beauty Cosmetics",
    JobCategoryId: 11
  },
  {
    id: JobTypeId.HEALTH_CARE,
    guiOrder: 52,
    chineseDisplayText: "健康保健",
    englishDisplayText: "Health Care",
    JobCategoryId: 11
  },
  {
    id: JobTypeId.SPORT,
    guiOrder: 53,
    chineseDisplayText: "運動",
    englishDisplayText: "Sport",
    JobCategoryId: 11
  },
  {
    id: JobTypeId.HEALTH_OTHER,
    guiOrder: 54,
    chineseDisplayText: "健康（其他）",
    englishDisplayText: "Health (Other)",
    JobCategoryId: 11
  },
  {
    id: JobTypeId.STAFFING_AND_RECRUITING,
    guiOrder: 55,
    chineseDisplayText: "員工和招聘",
    englishDisplayText: "Staffing And Recruiting",
    JobCategoryId: 12
  },
  {
    id: JobTypeId.RECRUITMENT_CONSULTANT,
    guiOrder: 56,
    chineseDisplayText: "求職顧問",
    englishDisplayText: "Recruitment Consultant",
    JobCategoryId: 12
  },
  {
    id: JobTypeId.HUMAN_RESOURCE_OTHER,
    guiOrder: 57,
    chineseDisplayText: "人力資源（其他）",
    englishDisplayText: "Human Resource (Other)",
    JobCategoryId: 12
  },
  {
    id: JobTypeId.INSURANCE,
    guiOrder: 58,
    chineseDisplayText: "保險",
    englishDisplayText: "Insurance",
    JobCategoryId: 13
  },
  {
    id: JobTypeId.BARRISTER,
    guiOrder: 59,
    chineseDisplayText: "大律師",
    englishDisplayText: "Barrister",
    JobCategoryId: 14
  },
  {
    id: JobTypeId.LEGAL_TRAINEE,
    guiOrder: 60,
    chineseDisplayText: "法律實習生",
    englishDisplayText: "Legal Trainee",
    JobCategoryId: 14
  },
  {
    id: JobTypeId.LEGAL_CONSULTANT,
    guiOrder: 61,
    chineseDisplayText: "法律顧問",
    englishDisplayText: "Legal Consultant",
    JobCategoryId: 14
  },
  {
    id: JobTypeId.SOLICITOR,
    guiOrder: 62,
    chineseDisplayText: "事務律師",
    englishDisplayText: "Solicitor",
    JobCategoryId: 14
  },
  {
    id: JobTypeId.LEGAL_SERVICE_OTHER,
    guiOrder: 63,
    chineseDisplayText: "法律服務（其他）",
    englishDisplayText: "Legal Services (Other)",
    JobCategoryId: 14
  },
  {
    id: JobTypeId.TRANSPORTATION_AND_LOGISTIC,
    guiOrder: 64,
    chineseDisplayText: "運輸和物流",
    englishDisplayText: "Transportation And Logistic",
    JobCategoryId: 15
  },
  {
    id: JobTypeId.LUXURY_GOODS_AND_JEWELRY,
    guiOrder: 65,
    chineseDisplayText: "奢侈品和珠寶",
    englishDisplayText: "Luxury Goods And Jewelry",
    JobCategoryId: 16
  },
  {
    id: JobTypeId.PROJECT_MANAGER,
    guiOrder: 66,
    chineseDisplayText: "項目經理",
    englishDisplayText: "Project Manager",
    JobCategoryId: 17
  },
  {
    id: JobTypeId.PRODUCT_MANAGER,
    guiOrder: 67,
    chineseDisplayText: "產品經理",
    englishDisplayText: "Product Manager",
    JobCategoryId: 17
  },
  {
    id: JobTypeId.MANAGEMENT_TRAINEE,
    guiOrder: 68,
    chineseDisplayText: "管理培訓生",
    englishDisplayText: "Management Trainee",
    JobCategoryId: 17
  },
  {
    id: JobTypeId.MANAGEMENT_OTHER,
    guiOrder: 69,
    chineseDisplayText: "管理 (其他)",
    englishDisplayText: "Management (other)",
    JobCategoryId: 17
  },
  {
    id: JobTypeId.HANDICRAFT,
    guiOrder: 70,
    chineseDisplayText: "手工藝",
    englishDisplayText: "Handicraft",
    JobCategoryId: 18
  },
  {
    id: JobTypeId.MANUFACTURING_OTHER,
    guiOrder: 70,
    chineseDisplayText: "製造業 (其他)",
    englishDisplayText: "Manufacturing (Other)",
    JobCategoryId: 18
  },

  {
    id: JobTypeId.ADVERTISING,
    guiOrder: 71,
    chineseDisplayText: "廣告",
    englishDisplayText: "Advertising",
    JobCategoryId: 19
  },
  {
    id: JobTypeId.DIGITAL_MARKETING,
    guiOrder: 72,
    chineseDisplayText: "數位市場推廣策劃",
    englishDisplayText: "Digital Marketing",
    JobCategoryId: 19
  },
  {
    id: JobTypeId.MARKETING,
    guiOrder: 73,
    chineseDisplayText: "市場推廣策劃",
    englishDisplayText: "Marketing",
    JobCategoryId: 19
  },
  {
    id: JobTypeId.MANAGEMENT_OTHER,
    guiOrder: 74,
    chineseDisplayText: "市場推廣策劃 (其他)",
    englishDisplayText: "Marketing (Other)",
    JobCategoryId: 19
  },
  {
    id: JobTypeId.BROADCASTING,
    guiOrder: 75,
    chineseDisplayText: "廣播",
    englishDisplayText: "Broadcasting",
    JobCategoryId: 20
  },
  {
    id: JobTypeId.MEDIA_PRODUCTION,
    guiOrder: 76,
    chineseDisplayText: "媒體製作",
    englishDisplayText: "Media Production",
    JobCategoryId: 20
  },
  {
    id: JobTypeId.MULTI_MEDIA,
    guiOrder: 77,
    chineseDisplayText: "多媒體",
    englishDisplayText: "Multi Media",
    JobCategoryId: 20
  },
  {
    id: JobTypeId.EDITOR_AND_JOURNALISM,
    guiOrder: 78,
    chineseDisplayText: "編輯和新聞",
    englishDisplayText: "Editor And Journalism",
    JobCategoryId: 20
  },
  {
    id: JobTypeId.MEDIA_OTHER,
    guiOrder: 79,
    chineseDisplayText: "媒體（其他）",
    englishDisplayText: "Media (Other)",
    JobCategoryId: 20
  },
  {
    id: JobTypeId.DENTAL_SERVICE,
    guiOrder: 80,
    chineseDisplayText: "牙科服務",
    englishDisplayText: "Dental Service",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.DOCTOR,
    guiOrder: 81,
    chineseDisplayText: "醫生",
    englishDisplayText: "Doctor",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.MUSIC_THERAPIST,
    guiOrder: 82,
    chineseDisplayText: "音樂治療師",
    englishDisplayText: "Music Therapist",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.NURSE,
    guiOrder: 83,
    chineseDisplayText: "護士",
    englishDisplayText: "Nurse",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.NURSING,
    guiOrder: 84,
    chineseDisplayText: "護理",
    englishDisplayText: "Nursing",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.OCCUPATIONAL_THERAPIST,
    guiOrder: 85,
    chineseDisplayText: "職業治療師",
    englishDisplayText: "Occupational Therapist",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.PHARMACY,
    guiOrder: 86,
    chineseDisplayText: "藥劑",
    englishDisplayText: "Pharmacy",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.PSYCHOLOGICAL_COUNSELLING,
    guiOrder: 87,
    chineseDisplayText: "心理諮詢",
    englishDisplayText: "Psychological Counselling",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.PHYSICAL_THERAPIST,
    guiOrder: 88,
    chineseDisplayText: "物理治療師",
    englishDisplayText: "Physical Therapist",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.SPEECH_THERAPIST,
    guiOrder: 89,
    chineseDisplayText: "語言治療師",
    englishDisplayText: "Speech Therapist",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.THERAPIST,
    guiOrder: 90,
    chineseDisplayText: "治療師",
    englishDisplayText: "Therapist",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.VETERINARY,
    guiOrder: 91,
    chineseDisplayText: "獸醫",
    englishDisplayText: "Veterinary",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.MEDICAL_SERVICE_OTHER,
    guiOrder: 92,
    chineseDisplayText: "醫療服務（其他）",
    englishDisplayText: "Medical Services (Other)",
    JobCategoryId: 21
  },
  {
    id: JobTypeId.ARCHITECTURE,
    guiOrder: 93,
    chineseDisplayText: "農業",
    englishDisplayText: "Agriculture",
    JobCategoryId: 22
  },
  {
    id: JobTypeId.FISHERY,
    guiOrder: 94,
    chineseDisplayText: "漁業",
    englishDisplayText: "Fishery",
    JobCategoryId: 22
  },
  {
    id: JobTypeId.PRIMARY_INDUSTRY_OTHER,
    guiOrder: 95,
    chineseDisplayText: "初級產業（其他）",
    englishDisplayText: "Primary Industry (Other)",
    JobCategoryId: 22
  },
  {
    id: JobTypeId.REAL_ESTATE,
    guiOrder: 96,
    chineseDisplayText: "房地產",
    englishDisplayText: "Real Estate",
    JobCategoryId: 23
  },
  {
    id: JobTypeId.PROPERTY_MANAGEMENT,
    guiOrder: 97,
    chineseDisplayText: "物業管理",
    englishDisplayText: "Property Management",
    JobCategoryId: 23
  },
  {
    id: JobTypeId.PROPERTY_OTHER,
    guiOrder: 98,
    chineseDisplayText: "房地產（其他）",
    englishDisplayText: "Property (Other)",
    JobCategoryId: 23
  },
  {
    id: JobTypeId.MERCHANDISING,
    guiOrder: 99,
    chineseDisplayText: "銷售",
    englishDisplayText: "Merchandising",
    JobCategoryId: 24
  },
  {
    id: JobTypeId.PURCHASING,
    guiOrder: 100,
    chineseDisplayText: "採購",
    englishDisplayText: "Purchasing",
    JobCategoryId: 24
  },
  {
    id: JobTypeId.RETAIL_OTHER,
    guiOrder: 101,
    chineseDisplayText: "零售（其他）",
    englishDisplayText: "Retail (Other)",
    JobCategoryId: 24
  },
  {
    id: JobTypeId.ENERGY,
    guiOrder: 102,
    chineseDisplayText: "能源",
    englishDisplayText: "Energy",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.DIETITIAN,
    guiOrder: 103,
    chineseDisplayText: "營養師",
    englishDisplayText: "Dietitian",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.FOOD_NUTRITIONIST,
    guiOrder: 104,
    chineseDisplayText: "食品營養學家",
    englishDisplayText: "Food Nutritionist",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.FOOD_SCIENCE,
    guiOrder: 105,
    chineseDisplayText: "食物科學",
    englishDisplayText: "Food Science",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.LABORATORY,
    guiOrder: 106,
    chineseDisplayText: "實驗室",
    englishDisplayText: "Laboratory",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.R_AND_D,
    guiOrder: 107,
    chineseDisplayText: "研究與開發",
    englishDisplayText: "Research and development",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.SCIENCE_OTHER,
    guiOrder: 108,
    chineseDisplayText: "科學（其他）",
    englishDisplayText: "Science (Other)",
    JobCategoryId: 25
  },
  {
    id: JobTypeId.SOCIAL_WORKER,
    guiOrder: 109,
    chineseDisplayText: "社會工作者",
    englishDisplayText: "Social Worker",
    JobCategoryId: 26
  },
  {
    id: JobTypeId.SOCIAL_SERVICE_OTHER,
    guiOrder: 110,
    chineseDisplayText: "社會服務（其他）",
    englishDisplayText: "Social Service (Other)",
    JobCategoryId: 26
  },
  {
    id: JobTypeId.TEXTILES,
    guiOrder: 111,
    chineseDisplayText: "紡織品",
    englishDisplayText: "Textiles",
    JobCategoryId: 27
  },
  {
    id: JobTypeId.AI_AND_MACHINE_LEARNING_ENGINEER,
    guiOrder: 112,
    chineseDisplayText: "AI和機器學習工程師",
    englishDisplayText: "AI And Machine Learning Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.BACKEND_SOFTWARE_ENGINEER,
    guiOrder: 113,
    chineseDisplayText: "後端軟件工程師",
    englishDisplayText: "Backend Software Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.CYBER_SECURITY,
    guiOrder: 114,
    chineseDisplayText: "網絡安全",
    englishDisplayText: "Cyber Security",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.FRONTEND_SOFTWARE_ENGINEER,
    guiOrder: 115,
    chineseDisplayText: "前端軟件工程師",
    englishDisplayText: "Frontend Software Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.FULL_STACK_SOFTWARE_ENGINEER,
    guiOrder: 115,
    chineseDisplayText: "全端軟件工程師",
    englishDisplayText: "Full Stack Software Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.DEV_OPS,
    guiOrder: 116,
    chineseDisplayText: "DevOps",
    englishDisplayText: "DevOps",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.DATA_ANALYST,
    guiOrder: 117,
    chineseDisplayText: "數據分析師",
    englishDisplayText: "Data Analyst",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.DATA_SCIENTIST,
    guiOrder: 118,
    chineseDisplayText: "數據科學家",
    englishDisplayText: "Data Scientist",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.GAME_DEVELOPER,
    guiOrder: 119,
    chineseDisplayText: "遊戲開發",
    englishDisplayText: "Game Developer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.MOBILE_SOFTWARE_ENGINEER,
    guiOrder: 120,
    chineseDisplayText: "手機軟件工程師",
    englishDisplayText: "Mobile Software Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.INFRASTRUCTURE_ENGINEER,
    guiOrder: 121,
    chineseDisplayText: "系統工程師",
    englishDisplayText: "Infrastructure Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.IOT_ENGINEER,
    guiOrder: 122,
    chineseDisplayText: "物聯網工程師",
    englishDisplayText: "IOT Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.IT_SUPPORT,
    guiOrder: 123,
    chineseDisplayText: "IT Support",
    englishDisplayText: "IT Support",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.QA_ENGINEER,
    guiOrder: 124,
    chineseDisplayText: "QA工程師",
    englishDisplayText: "QA Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.ROBOTIC_ENGINEER,
    guiOrder: 125,
    chineseDisplayText: "機器人工程師",
    englishDisplayText: "Robotic Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.SOLUTION_ENGINEER,
    guiOrder: 126,
    chineseDisplayText: "解決方案工程師",
    englishDisplayText: "Solution Engineer",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.TECHNOLOGY_OTHER,
    guiOrder: 127,
    chineseDisplayText: "科技(其他)",
    englishDisplayText: "Technology Other",
    JobCategoryId: 28
  },
  {
    id: JobTypeId.TRAVEL,
    guiOrder: 128,
    chineseDisplayText: "旅遊",
    englishDisplayText: "Travel",
    JobCategoryId: 29
  },
  {
    id: JobTypeId.HOTEL_SERVICE,
    guiOrder: 129,
    chineseDisplayText: "酒店服務",
    englishDisplayText: "Hotel Service",
    JobCategoryId: 29
  },
  {
    id: JobTypeId.TOURISM_OTHER,
    guiOrder: 130,
    chineseDisplayText: "旅遊業（其他）",
    englishDisplayText: "Tourism (Other)",
    JobCategoryId: 29
  },
  {
    id: JobTypeId.TRANSLATION,
    guiOrder: 131,
    chineseDisplayText: "翻譯",
    englishDisplayText: "Translation",
    JobCategoryId: 30
  },
  {
    id: JobTypeId.CIVIL_SERVANT,
    guiOrder: 132,
    chineseDisplayText: "公務員",
    englishDisplayText: "Civil Servant",
    JobCategoryId: 31
  },
  {
    id: JobTypeId.ENTREPRENEUR,
    guiOrder: 133,
    chineseDisplayText: "創業",
    englishDisplayText: "Entrepreneur",
    JobCategoryId: 31
  },
  {
    id: JobTypeId.FREELANCER,
    guiOrder: 134,
    chineseDisplayText: "自由工作者",
    englishDisplayText: "Freelancer",
    JobCategoryId: 31
  },
  {
    id: JobTypeId.KOL,
    guiOrder: 135,
    chineseDisplayText: "KOL",
    englishDisplayText: "KOL",
    JobCategoryId: 31
  },
  {
    id: JobTypeId.SLASHER,
    guiOrder: 136,
    chineseDisplayText: "Slasher",
    englishDisplayText: "Slasher",
    JobCategoryId: 31
  },
  {
    id: JobTypeId.OTHER,
    guiOrder: 137,
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
  jobTypeList,
  WEB_ORIGIN
}
