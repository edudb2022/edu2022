import React, { Children, PropsWithChildren } from "react"
import { CommonHelpers } from "../../helpers"
import { CommonCopyRight } from "../../utils/copyRight/common"

interface IDetailReviewInfoContainerProps {
  className?: string
  postDate: string
  username: string | null
  contactMetaData: { type: string; detail: string } | null
  admissionYear?: string
  academicStatus?: string
  interviewDate?: string
  DressCode?: string
  offerDate?: string
  currentSchool?: string
  currentProgramme?: string
  jobType?: string
  companyName?: string
  jobSource?: string
  applicationType?: string
  gpa?: number | null | string
  honor?: string | null
}

interface IInfoItemProps {
  header: string
  description: string | number
}
const DetailReviewInfoContainer: React.FunctionComponent<
  PropsWithChildren<IDetailReviewInfoContainerProps>
> = ({
  className,
  postDate,
  username,
  contactMetaData,
  admissionYear,
  interviewDate,
  academicStatus,
  DressCode,
  offerDate,
  currentSchool,
  currentProgramme,
  jobType,
  companyName,
  jobSource,
  applicationType,
  gpa,
  honor,
  children
}) => {
  const contact = contactMetaData
    ? `${contactMetaData.type} : ${contactMetaData.detail}`
    : CommonCopyRight.NOT_WILLING_TO_RESPONSE
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
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
          {offerDate && (
            <InfoItem
              header="收Offer日期"
              description={CommonHelpers.formatData(offerDate, "MM/YY")}
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
          {gpa && <InfoItem header="GPA" description={gpa} />}
          {honor && <InfoItem header="學位榮譽" description={honor} />}
          {jobType && <InfoItem header="jobType" description={jobType} />}
          {companyName && (
            <InfoItem header="公司名稱" description={companyName} />
          )}
          {jobSource && <InfoItem header="工作來源" description={jobSource} />}
          {applicationType && (
            <InfoItem header="類型" description={applicationType} />
          )}

          {DressCode && <InfoItem header="衣著要求" description={DressCode} />}

          <InfoItem header="用戶名稱" description={username || "Unknown"} />
          <InfoItem
            header="發布日期"
            description={CommonHelpers.formatData(postDate, "DD/MM/YY")}
          />
          <InfoItem header="聯絡資訊" description={contact} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default DetailReviewInfoContainer
