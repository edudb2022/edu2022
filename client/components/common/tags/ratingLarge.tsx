import React from "react"
import RatingTag, { IRantingTagProps } from "./rating"

interface IRatingLargeTagProps extends IRantingTagProps {}

const RatingLargeTag: React.FunctionComponent<IRatingLargeTagProps> = ({
  ...props
}) => {
  return <RatingTag className={"text-xl md:text-2xl"} {...props} />
}

export default RatingLargeTag
