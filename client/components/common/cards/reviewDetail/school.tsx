import { Rating } from "@mui/material"
import Link from "next/link"
import React from "react"
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from "."
import { ID } from "../../../../types/common"
import RatingTag from "../../tags/rating"
import RantingTag from "../../tags/rating"

interface ISchoolReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
  id: ID
}

const SchoolReviewDetailCard: React.FunctionComponent<
  ISchoolReviewDetailCardProps
> = ({ value, label, id, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <Link href={`/reviewDetail/tertiary/school/${id}`}>
        <a>
          <div className="flex flex-col-reverse md:flex-row h-full items-center justify-center gap-x-4">
            {/* <Rating name="read-only" value={value} readOnly className="text-5xl" />
        <h1>{label}</h1> */}
            <RatingTag
              ranting={1}
              title={`1.4 ${label}`}
              className=" md:text-2xl text-lg md:px-4  font-black flex justify-center items-center"
            />
          </div>
        </a>
      </Link>
    </BaseReviewDetailCard>
  )
}

export default SchoolReviewDetailCard
