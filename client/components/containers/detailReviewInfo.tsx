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
        <p className="text-base text-gray-500">{description}</p>
      </div>
    )
  }
  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center bg-theme-one-50">
        <div className="flex flex-row justify-evenly w-full">
          {admissionYear && (
            <InfoItem header="入學日期" description={admissionYear} />
          )}
          {interviewDate && (
            <InfoItem header="面試日期" description={interviewDate} />
          )}
          {academicStatus && (
            <InfoItem header="學業狀態" description={academicStatus} />
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
          {jobSource && <InfoItem header="工作來源" description={jobSource} />}
          {offerDate && (
            <InfoItem header="收Offer日期" description={offerDate} />
          )}
          {DressCode && <InfoItem header="衣著要求" description={DressCode} />}

          {/* <div className="flex flex-row justify-evenly border-2 w-full"> */}

          <InfoItem header="用戶名稱" description={username || "Unknown"} />
          <InfoItem header="發布日期" description={postDate} />
          <InfoItem header="聯絡資訊" description={contact} />
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default DetailReviewInfoContainer
