import {
  AdmissionLevelTypesId,
  AdmissionOfferTypeId,
  ApplicationTypeId,
  ContactMethodTypeId,
  DressCodeTypeId,
  DSEGradeTypesId,
  DSEJupasChoicePriorityId,
  InternshipTypesId,
  JobSourceTypesId,
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
  { value: DressCodeTypeId.FREE, title: "Free" }
]

const DSEJupasChoicePriorityTypesList = [
  { value: DSEJupasChoicePriorityId.BAND_A_ONE, title: "A1" },
  { value: DSEJupasChoicePriorityId.BAND_A_TWO, title: "A2" },
  { value: DSEJupasChoicePriorityId.BAND_A_THREE, title: "A3" },
  { value: DSEJupasChoicePriorityId.BAND_B, title: "B" },
  { value: DSEJupasChoicePriorityId.BAND_C, title: "C" },
  { value: DSEJupasChoicePriorityId.OTHER, title: "Others" }
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
  { value: AdmissionLevelTypesId.YEAR_ONE, title: "1" },
  { value: AdmissionLevelTypesId.YEAR_TWO, title: "2" },
  { value: AdmissionLevelTypesId.YEAR_THREE, title: "3" },
  { value: AdmissionLevelTypesId.YEAR_FOUR, title: "4" },
  { value: AdmissionLevelTypesId.YEAR_FIVE_PLUS, title: "5+" }
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
  { value: JobSourceTypesId.JOBSDB, title: "JobsDb" },
  { value: JobSourceTypesId.INDEED, title: "Indeed" },
  {
    value: JobSourceTypesId.UNIVERSITY_CAREER_CENTER,
    title: "University Career Centre"
  },
  { value: JobSourceTypesId.COMPANY_WEBSITE, title: "CompanyWebsite" },
  { value: JobSourceTypesId.FRIENDS, title: "frends recommendation" },
  { value: JobSourceTypesId.OTHERS, title: "others " }
]

const contactMethodTypesList = [
  { value: ContactMethodTypeId.EMAIL, title: "Email" },
  { value: ContactMethodTypeId.SIGNAL, title: "Signal" },
  { value: ContactMethodTypeId.WHATSAPP, title: "Whatsapp" },
  { value: ContactMethodTypeId.TELEGRAM, title: "Telegram" },
  { value: ContactMethodTypeId.OTHERS, title: "Others" }
]

const DSEGradeTypesList = [
  { value: DSEGradeTypesId.ONE, title: "1" },
  { value: DSEGradeTypesId.TWO, title: "2" },
  { value: DSEGradeTypesId.THREE, title: "3" },
  { value: DSEGradeTypesId.FOUR, title: "4" },
  { value: DSEGradeTypesId.FIVE, title: "5" },
  { value: DSEGradeTypesId.FIVE_START, title: "5*" },
  { value: DSEGradeTypesId.FIVE_DOUBLE_STAR, title: "5**" },
  { value: DSEGradeTypesId.PASS, title: "Pass" },
  { value: DSEGradeTypesId.FAIL, title: "fail" },
  { value: DSEGradeTypesId.UNCLASSIFIED, title: "U" }
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
  DSEGradeTypesList
}
