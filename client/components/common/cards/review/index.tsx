import Image from "next/image"
import React, { PropsWithChildren } from "react"
import BaseCard, { IBaseCardProps } from ".."
import { HiOutlineDocumentText } from "react-icons/hi"
import { SchoolName } from "../../../../types/common"
import { schoolColorMapper } from "../../../../mappers/schoolColor"

export interface IBaseReviewCardProps extends IBaseCardProps {
  id: string | number
  schoolChineseName: SchoolName
  schoolEnglishName: SchoolName
  schoolShortName: SchoolName
  type: string
  totalReports: number
}

const BaseReviewCard: React.FunctionComponent<
  PropsWithChildren<IBaseReviewCardProps>
> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  children,
  type,
  id
}) => {
  return (
    <BaseCard
      className="flex flex-row  md:w-92  w-88 h-72 md:h-72 border-theme-one-100 shadow-theme-one-50 shadow-sm border rounded-2xl bg-white  hover:animate-moveUp
    "
    >
      <div className="relative p-2 w-full">
        <h4
          style={{
            color:
              schoolColorMapper[
                schoolShortName.toLocaleLowerCase() as keyof typeof schoolColorMapper
              ]
          }}
        >
          {schoolChineseName}
        </h4>
        <h6 className="text-gray-500">{schoolEnglishName}</h6>

        {children}
        <p className="absolute bottom-2   right-2  flex flex-row items-center">
          {totalReports} <HiOutlineDocumentText />
        </p>
      </div>
    </BaseCard>
  )
}

export default BaseReviewCard
