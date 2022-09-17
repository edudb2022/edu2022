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

interface IInfoItemProps {
  header: string
  description: string | number
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
  const InfoItem: React.FunctionComponent<IInfoItemProps> = ({
    header,
    description
  }) => {
    return (
      <div className="text-center">
        <div className="text-theme-one-500 font-semibold text-xs">{header}</div>
        <p className="text-base">{description}</p>
      </div>
    )
  }
  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center border-2 bg-theme-one-50">
        <div className="flex flex-row justify-evenly border-2 w-full">
          {admissionYear && (
            <InfoItem header="入學日期" description={admissionYear} />
          )}
          {interviewDate && (
            <InfoItem header="面試日期" description={interviewDate} />
          )}
          {academicStatus && (
            <InfoItem header="Academic Status" description={academicStatus} />
          )}

          {currentSchool && (
            <InfoItem header="最近就讀的學校" description={currentSchool} />
          )}
          {currentProgramme && (
            <InfoItem header="最近就讀的課程" description={currentProgramme} />
          )}
          {industry && <InfoItem header="Industry" description={industry} />}
          {companyName && (
            <InfoItem header="公司名稱" description={companyName} />
          )}
          {jobSource && <InfoItem header="JobSource" description={jobSource} />}
          {offerDate && <InfoItem header="OfferDate" description={offerDate} />}
          {DressCode && <InfoItem header="DressCode" description={DressCode} />}

          {/* <div className="flex flex-row justify-evenly border-2 w-full"> */}

          <InfoItem header="username" description={username || "Unknown"} />
          <InfoItem header="Post Date" description={postDate} />
          <InfoItem header="contact " description={contact} />
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default DetailReviewInfoContainer
