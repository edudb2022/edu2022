import React from "react"

interface IDetailReviewInfoContainerProps {
  className?: string
  postDate: string
  username: string | null
  contact: string
  admissionYear?: string
  academicStatus?: string
  interviewDate: string
  DressCode?: string
  offerDate?: string
  currentSchool?: string
  currentProgramme?: string
  industry?: string
  companyName?: string
  jobSource?: string
}

const DetailReviewInfoContainer: React.FunctionComponent<
  IDetailReviewInfoContainerProps
> = ({
  className,
  postDate,
  username,
  contact,
  admissionYear,
  interviewDate,
  academicStatus,
  DressCode,
  offerDate,
  currentSchool,
  currentProgramme,
  industry,
  companyName,
  jobSource
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col">
        <div className="flex flex-row justify-around flex-wrap">
          {admissionYear && <p> {`admissionYear : ${admissionYear}`}</p>}
          {interviewDate && <p> {`interviewDate : ${interviewDate}`}</p>}
          {academicStatus && <p> {`academicStatus : ${academicStatus}`}</p>}
          {currentSchool && <p> {`currentSchool : ${currentSchool}`}</p>}
          {currentProgramme && (
            <p> {`currentProgramme : ${currentProgramme}`}</p>
          )}
          {industry && <p> {`industry  : ${industry}`}</p>}
          {companyName && <p> {`companyName  : ${companyName}`}</p>}
          {jobSource && <p> {`jobSource  : ${jobSource}`}</p>}
          {offerDate && <p> {`offerDate : ${offerDate}`}</p>}
          {DressCode && <p> {`DressCode : ${DressCode}`}</p>}
        </div>

        <div className="flex flex-row">
          <p> {`username  : ${username ? username : "null"}`}</p>
          <p> {`Post Date : ${postDate}`}</p>
          <p> {`contact : ${contact ? contact : "null"}`}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailReviewInfoContainer
