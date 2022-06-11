import Link from "next/link"
import React from "react"
import { HiOutlineDocumentText } from "react-icons/hi"
import { IBaseCardProps } from "."
import { ID } from "../../../types/common"

interface IProgrammeCardProps extends IBaseCardProps {
  totalReports: number
  programmeChineseName: string
  programmeEnglishName: string
  programmeShortName: string
  programmeType: string
  programmeId: ID
}

//programmeType = HD/ass/bahelor

const ProgrammeCard: React.FunctionComponent<IProgrammeCardProps> = ({
  programmeChineseName,
  programmeEnglishName,
  programmeShortName,
  programmeType,
  totalReports,
  programmeId,
}) => {
  return (
    <Link href={`/programme/tertiary/${programmeId}`}>
      <a>
        <div className="relative shadow-lg w-96 h-40 text-start rounded-xl ">
          <div className="bg-school-cuhk rounded-t-xl h-4"></div>
          <div className="p-4 flex flex-col  h-full">
            <h5 className="text-base">{programmeChineseName}</h5>
            <h6 className="text-sm mt-2">{programmeEnglishName}</h6>

            <div className="absolute bottom-1 w-9/10 ">
              <div className="flex flex-row justify-between">
                <p>{programmeType}</p>

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
