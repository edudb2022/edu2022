import Link from "next/link"
import React from "react"
import { HiOutlineDocumentText } from "react-icons/hi"
import { IBaseCardProps } from "."
import { ID } from "../../../types/common"

interface IProgrammeCardProps extends IBaseCardProps {
  totalReports: number
  programmeChineseName: string
  programmeEnglishName: string
  programmeType: string
  programmeId: ID
  faculty: string
}

//programmeType = HD/ass/bahelor

const ProgrammeCard: React.FunctionComponent<IProgrammeCardProps> = ({
  programmeChineseName,
  programmeEnglishName,
  programmeType,
  totalReports,
  programmeId,
  faculty
}) => {
  return (
    <Link href={`/programme/tertiary/${programmeId}`}>
      <a>
        <div className="relative shadow-lg w-92 h-40 text-start rounded-xl ">
          <div className="bg-school-cuhk rounded-t-xl h-4"></div>
          <div className="p-4 flex flex-col h-full">
            <div className="flex flex-row justify-between">
              <h5 className="text-base">{programmeChineseName}</h5>
              <p>{programmeType}</p>
            </div>

            <h6 className="text-sm mt-2">{programmeEnglishName}</h6>

            <div className="absolute bottom-1 w-9/10 ">
              <div className="flex flex-row justify-between">
                <p>{faculty}</p>

                <p className="flex flex-row items-center  ">
                  {totalReports} <HiOutlineDocumentText />
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProgrammeCard
