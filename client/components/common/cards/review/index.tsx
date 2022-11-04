import Image from "next/image"
import React, { PropsWithChildren } from "react"
import BaseCard, { IBaseCardProps } from ".."
import { HiOutlineDocumentText } from "react-icons/hi"
import { ID, SchoolName, SchoolTypeId } from "../../../../types/common"
import { schoolColorMapper } from "../../../../mappers/schoolColor"

export interface IBaseReviewCardProps extends IBaseCardProps {
  id: ID | number
  schoolChineseName: SchoolName
  schoolEnglishName: SchoolName
  schoolShortName: SchoolName
  type: string
  totalReports: number
}

//
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
  // const school = "cuhk"

  // const schoolColor = ` bg-schPool-${school}`

  // console.log(schoolShortName)
  return (
    <BaseCard className="flex flex-row  md:w-92  w-88 h-72 md:h-72 border-theme-one-100 shadow-theme-one-50 shadow-sm  border rounded-2xl bg-white hover:animate-borderThemeOneDeep">
      {/* <div
        className={`flex flex-col py-4 justify-between items-center w-1/4 ${schoolColor} rounded-l-2xl `}
      >
        <div className="bg-white border-2 rounded-full p-2 m-2 ">
          <Image
            src="/icons/schools/universities/hku.jpg"
            width={50}
            height={50}
            alt={`${schoolShortName}`}
            style={{ borderRadius: "40rem" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full  ">
          <div className="border-black  w-4/5 text-center py-2 m-2 bg-white rounded-2xl">
            {schoolShortName.toUpperCase()}
          </div>
          <div className="border-black  w-4/5 text-center py-2 bg-white rounded-2xl">
            {type}
          </div>
        </div>
      </div> */}

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
