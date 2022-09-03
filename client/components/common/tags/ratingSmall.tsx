import React from "react"
import RatingTag, { IRantingTagProps } from "./rating"

interface IRatingSmallTagProps extends IRantingTagProps {}

const RatingSmallTag: React.FunctionComponent<IRatingSmallTagProps> = ({
  ...props
}) => {
  return (
    <RatingTag
      className={" text-sm"}
      titleClassName={"md:text-sm"}
      headerClassName="text-sm font-medium"
      {...props}
    />
  )
}

export default RatingSmallTag
