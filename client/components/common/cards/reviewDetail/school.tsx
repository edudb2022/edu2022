import { Rating } from "@mui/material"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import RantingTag from "../../tags/ranking"

interface ISchoolReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
}

const SchoolReviewDetailCard: React.FunctionComponent<
  ISchoolReviewDetailCardProps
> = ({ value, label, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex flex-col-reverse md:flex-row h-full items-center justify-center gap-x-4">
        {/* <Rating name="read-only" value={value} readOnly className="text-5xl" />
        <h1>{label}</h1> */}
        <RantingTag
          ranting={1}
          title={`1.4 ${label}`}
          className=" md:text-2xl text-lg md:px-4  font-black flex justify-center items-center"
        />
      </div>
    </BaseReviewDetailCard>
  )
}

export default SchoolReviewDetailCard
