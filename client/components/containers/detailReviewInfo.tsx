import React from "react"

interface IDetailReviewInfoContainerProps {
  className?: string
  postDate: string
  username: string | null
  contact: string
  admissionYear?: string
  academicStatus?: string
  interviewDate?: string
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
      <div className="flex flex-col items-center border-2">
        <div className="flex flex-row justify-evenly border-2 w-full">
          {admissionYear && <p> {`Admission Year : ${admissionYear}`}</p>}
          {interviewDate && <p> {`Interview Date : ${interviewDate}`}</p>}
          {academicStatus && <p> {`Academic Status : ${academicStatus}`}</p>}
          {currentSchool && <p> {`CurrentSchool : ${currentSchool}`}</p>}
          {currentProgramme && (
            <p> {`Current Programme : ${currentProgramme}`}</p>
          )}
          {industry && <p> {`Industry  : ${industry}`}</p>}
          {companyName && <p> {`CompanyName  : ${companyName}`}</p>}
          {jobSource && <p> {`JobSource  : ${jobSource}`}</p>}
          {offerDate && <p> {`OfferDate : ${offerDate}`}</p>}
          {DressCode && <p> {`DressCode : ${DressCode}`}</p>}

          {/* <div className="flex flex-row justify-evenly border-2 w-full"> */}
          <p> {`username  : ${username ? username : "null"}`}</p>
          <p> {`Post Date : ${postDate}`}</p>
          <p> {`contact : ${contact ? contact : "null"}`}</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default DetailReviewInfoContainer
