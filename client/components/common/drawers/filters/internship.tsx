import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import InternshipFilter from "../../filters/internship"

interface IInternshipFilterDrawerProps extends IBaseFilterDrawerProps {}

const InternshipFilterDrawer: React.FunctionComponent<
  IInternshipFilterDrawerProps
> = ({ ...props }) => {
  return (
    <BaseFilterDrawer {...props}>
      <InternshipFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default InternshipFilterDrawer
