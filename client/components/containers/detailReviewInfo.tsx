import React from "react"
import { CommonHelpers } from "../../helpers"

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
  applicationType?: string
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
  jobSource,
  applicationType
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
    <div className={`mt-8 ${className}`}>
      <div className="flex flex-col items-center bg-theme-one-50 rounded-2xl p-4 mt-8">
        <div className="flex flex-wrap flex-row justify-evenly w-full">
          {admissionYear && (
            <InfoItem
              header="入學日期"
              description={CommonHelpers.formatData(admissionYear, "MM/YY")}
            />
          )}
          {interviewDate && (
            <InfoItem
              header="面試日期"
              description={CommonHelpers.formatData(interviewDate, "MM/YY")}
            />
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
          {applicationType && (
            <InfoItem header="類型" description={applicationType} />
          )}
          {offerDate && (
            <InfoItem header="收Offer日期" description={offerDate} />
          )}
          {DressCode && <InfoItem header="衣著要求" description={DressCode} />}

          <InfoItem header="用戶名稱" description={username || "Unknown"} />
          <InfoItem
            header="發布日期"
            description={CommonHelpers.formatData(postDate, "DD/MM/YY")}
          />
          <InfoItem header="聯絡資訊" description={contact} />
        </div>
      </div>
    </div>
  )
}

export default DetailReviewInfoContainer
