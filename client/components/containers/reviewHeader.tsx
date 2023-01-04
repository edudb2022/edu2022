import Image from "next/image"
import React, { PropsWithChildren } from "react"
import shortid from "shortid"
import StudentIcon from "../common/icons/student"

export interface IReviewHeaderContainerProps {
  ChineseTitle: string
  EnglishTitle?: string
  ShortTitle?: string
  schoolShortName: string
  layoutClassName?: string
  additionalInfoTag?: (string | undefined)[]
  isStudent?: boolean
  title?: string
}

const ReviewHeaderContainer: React.FunctionComponent<
  PropsWithChildren<IReviewHeaderContainerProps>
> = ({
  ShortTitle,
  ChineseTitle,
  EnglishTitle,
  schoolShortName,
  children,
  layoutClassName,
  additionalInfoTag,
  isStudent,
  title
}) => {
  const StyedItem: React.FunctionComponent<{ title: string }> = ({ title }) => {
    return (
      <div className="border-b  border-theme-one-600 text-theme-one-600">
        {title}
      </div>
    )
  }

  return (
    <div>
      <div
        className={`flex justify-center items-center p-4 ${layoutClassName} `}
      >
        <div className="flex flex-col md:flex-row md:justify-center w-4/5 ">
          <div className="hidden md:flex flex-row justify-end shrink-0 w-full md:w-1/5 h-fit ">
            {/* <div className="w-"> */}
            <Image
              src={`/icons/schools/tertiary/${schoolShortName}.jpg`}
              width={150}
              height={150}
              objectFit="contain"
              alt={`${ShortTitle}`}
              // style={{ width: "auto" }}
            />
            {/* </div> */}
          </div>
          <div className="flex flex-col text-center items-center justify-center gap-y-2 w-full mt-4 md:mt-0 md:w-fit ">
            <div className="flex flex-row gap-x-2">
              <h3 className="text-sm md:text-lg max-w-10/12">{ChineseTitle}</h3>
            </div>

            <h3 className="text-gray-400 text-sm  md:text-base">
              {EnglishTitle}
            </h3>

            <div className="flex flex-row justify-end items-center w-full gap-x-2">
              {additionalInfoTag &&
                additionalInfoTag.map((data) => {
                  if (data) {
                    return <StyedItem title={data} key={shortid.generate()} />
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-fow text-lg justify-center gap-x-2">
        <h2>{title}</h2>
        {isStudent && <StudentIcon />}
      </div>
      <div className="mt-12">{children}</div>
    </div>
  )
}

export default ReviewHeaderContainer
