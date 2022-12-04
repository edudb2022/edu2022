import Image from "next/image"
import React, { PropsWithChildren } from "react"
import shortid from "shortid"
import { schoolColorMapper } from "../../mappers/schoolColor"
import TextTag from "../common/tags/text"

export interface IReviewHeaderContainerProps {
  ChineseTitle: string
  EnglishTitle?: string
  ShortTitle?: string
  schoolShortName: string
  layoutClassName?: string
  jupasCode?: string
  additionalInfoTag?: string[]
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
  jupasCode,
  additionalInfoTag
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
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center">
            <Image
              src={`/icons/schools/universities/${schoolShortName}.jpg`}
              width={"100rem"}
              height={"100rem"}
              alt={`${ShortTitle}`}
            />
          </div>
          <div className="flex  flex-col text-center  items-center justify-center gap-y-2 mt-4 md:mt-0">
            <h3 className="test-xs">{ChineseTitle}</h3>
            <h3 className="text-gray-400 ">{EnglishTitle} </h3>
            {/* <div className="flex flex-row justify-end w-full gap-x-2">
              {ShortTitle && <TextTag title={ShortTitle} type="summer" />}
              {jupasCode && <TextTag title={jupasCode} type="themeOne" />}
            </div> */}

            <div className="flex flex-row justify-end items-center w-full gap-x-2">
              {jupasCode && <StyedItem title={jupasCode} />}
              {ShortTitle && <StyedItem title={ShortTitle} />}
              {additionalInfoTag &&
                additionalInfoTag.map((data) => {
                  return <StyedItem title={data} key={shortid.generate()} />
                })}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ReviewHeaderContainer
