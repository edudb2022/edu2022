import { Rating } from "@mui/material"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import RantingTag from "../../tags/ranking"
import RankingTag from "../../tags/ranking"

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
        <RantingTag
          ranting={1}
          title={`1.4 ${label}`}
          className=" md:text-2xl text-lg md:p-4 p-2 font-black flex justify-center items-center"
        />
        {/* <h1>{label}</h1> */}
      </div>
    </BaseReviewDetailCard>
  )
}

export default ProgrammeReviewDetailCard
