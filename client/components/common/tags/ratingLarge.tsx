import React from "react"
import RatingTag, { IRantingTagProps } from "./rating"

interface IRatingLargeTagProps extends IRantingTagProps {}

const RatingLargeTag: React.FunctionComponent<IRatingLargeTagProps> = ({
  ...props
}) => {
  return (
    <RatingTag
      className={"text-xl md:text-2xl"}
      titleClassName={"md:text-xl"}
      headerClassName="text-lg font-medium"
      {...props}
    />
  )
}

export default RatingLargeTag
