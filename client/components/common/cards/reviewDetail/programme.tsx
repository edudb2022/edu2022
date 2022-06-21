import { Rating } from "@mui/material"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import RatingTag from "../../tags/rating"
import RantingTag from "../../tags/rating"
import RankingTag from "../../tags/rating"

interface IProgrammeReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
}

const ProgrammeReviewDetailCard: React.FunctionComponent<
  IProgrammeReviewDetailCardProps
> = ({ value, label, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className="flex flex-col-reverse md:flex-row h-full items-center justify-center gap-x-4">
        {/* <Rating name="read-only" value={value} readOnly className="text-5xl" /> */}
        <RatingTag
          ranting={1}
          title={`1.4 ${label}`}
          className=" md:text-2xl text-lg md:px-8 px-4 font-black flex justify-center items-center"
        />
        {/* <h1>{label}</h1> */}
      </div>
    </BaseReviewDetailCard>
  )
}

export default ProgrammeReviewDetailCard
