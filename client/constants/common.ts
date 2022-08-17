import { DressCodeTypeId, SchoolTypeId } from "../types/common"

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

const dressCodeList = [
  { value: DressCodeTypeId.FORMAL, title: "Formal" },
  { value: DressCodeTypeId.SMART_CASUAL, title: "Smart caual" },
  { value: DressCodeTypeId.CASUAL, title: "Casual" },
  { value: DressCodeTypeId.FREE, title: "Free" }
]

export {
  dressCodeOptions,
  jobSourceOptions,
  internTypeOptions,
  schoolTypesList,
  dressCodeList
}
