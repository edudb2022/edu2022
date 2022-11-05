import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import IntershipFilter from "../../filters/internship"

interface IInternshipFilterDrawerProps extends IBaseFilterDrawerProps {}

const InternshipFilterDrawer: React.FunctionComponent<
  IInternshipFilterDrawerProps
> = ({ ...props }) => {
  return (
    <BaseFilterDrawer {...props}>
      <IntershipFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default InternshipFilterDrawer
